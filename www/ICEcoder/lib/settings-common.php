<?php
// Don't display, but log all errors
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', dirname(__FILE__).'/../error-log.txt');
error_reporting(-1);

// Set our default timezone and supress warning with @
@date_default_timezone_set(date_default_timezone_get());

// Set a stream context timeout for file reading
$context = stream_context_create(array('http'=>
	array(
		'timeout' => 60 // secs
	)
));

// Start a session if we haven't already
if(!isset($_SESSION)) {
//	ini_set('session.use_cookies','1');				// Use cookies not URL parameters 
//	ini_set('session.use_only_cookies','1');			// Force use of cookies and nothing else
//	ini_set('session.name','ICEcoder_Cookie');			// Set a seperate cookie session name
//	ini_set('session.cookie_lifetime','0');        			// Until the browser restarts by default
//	ini_set('session.cookie_domain','');				// This domain only
//	ini_set('session.cookie_path',str_replace($_SERVER['DOCUMENT_ROOT'],'',dirname(dirname(__FILE__)))); 	// ICEcoder path only, fails ON IE
//	ini_set('session.use_trans_sid','0');				// Ensure this insecure feature is disabled
//	ini_set('session.hash_function','sha512');			// Use Sha512 for session
//	ini_set('session.hash_bits_per_character','6');			// Specify hash scheme of 0-9,a-v,A-Z,-,,
//	ini_set('session.use_strict_mode','1');				// Reject any session ID that was user provided and not generated by the session			(since PHP 5.5.2)
//	ini_set('session.httponly','1');				// Only allow http protocol (ie, not JS) access to the cookie						(since PHP 5.2.0)
//	ini_set('session.save_path',dirname(__FILE__).'/../tmp');	// Localise the session files to /tmp
//
//	if (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') {
//		ini_set('session.cookie_secure','1');			// Only allows access to session ID when protocol is HTTPS, switched on under 'if https' condition 
//	}
	@session_start();						// Finally, start the session!
	if (!isset($_SESSION['csrf'])){
		session_regenerate_id(true);				// Create a new ID to help prevent fixation
	}
}

// Set the language file, if now possible
if (isset($_SESSION['text'])) {
	$text = $_SESSION['text'];
	$t = $text['settings-common'];
}

// Get data from a fopen or CURL connection
function getData($url,$type='fopen',$dieMessage=false,$timeout=60) {
	global $context;

	// Request is to connect via CURL
	if ($type == "curl" && function_exists('curl_init')) {
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
		curl_setopt($ch, CURLOPT_USERAGENT, 'ICEcoder');
		curl_setopt($ch, CURLOPT_FAILONERROR, true);
		curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
		curl_setopt($ch, CURLOPT_AUTOREFERER, true);
		curl_setopt($ch, CURLOPT_TIMEOUT, $timeout);
		$data = curl_exec($ch);
		curl_close($ch);
	// Otherwise, use an fopen connection
	} elseif (ini_get('allow_url_fopen')) {
		$context = stream_context_create(array('http'=>
			array(
				'timeout' => $timeout // secs
			)
		));
		$data = @file_get_contents($url,false,$context);
		if (!$data) {
			$data = @file_get_contents(str_replace("https:","http:",$url), false, $context);
		}
	}
	// Return data or die with message
	if ($data) {
		return $data;
	} elseif ($dieMessage) {
		die($dieMessage);
		exit;
	} else {
		return 'no data';
	}
}

// Logout if that's the action we're taking
if (isset($_GET['logout'])) {
	include(dirname(__FILE__)."/../processes/on-user-logout.php");
	$_SESSION['loggedIn']=false;
	$_SESSION['username']=false;
	session_destroy();
	header("Location: .");
	die("Logging you out...");
}

// If magic quotes are still on
if (get_magic_quotes_gpc ()) {
	function stripslashes_deep($value) {
		$value = is_array($value) ? array_map('stripslashes_deep', $value) : stripslashes($value);
		return $value;
	}
	$_POST = (isset($_POST) && !empty($_POST)) ? array_map('stripslashes_deep', $_POST) : array();
	$_GET = (isset($_GET) && !empty($_GET)) ? array_map('stripslashes_deep', $_GET) : array();
	$_COOKIE = (isset($_COOKIE) && !empty($_COOKIE)) ? array_map('stripslashes_deep', $_COOKIE) : array();
	$_REQUEST = (isset($_REQUEST) && !empty($_REQUEST)) ? array_map('stripslashes_deep', $_REQUEST) : array();
}

// Function to handle salted hashing
define('SALT_LENGTH',12);
function generateHash($plainText,$salt=null) {
	if ($salt === null) {
		$salt = substr(md5(uniqid(rand(), true)),0,SALT_LENGTH);
	} else {
		$salt = substr($salt,0,SALT_LENGTH);
	}
	return $salt.sha1($salt.$plainText);
}

// returns converted entities which have HTML entity equivalents
function strClean($var) {
	return preg_replace("/javascript\:/i","javascript&colon;",htmlentities($var, ENT_QUOTES, "UTF-8"));
}

// returns a number, whole or decimal or null
function numClean($var) {
	return is_numeric($var) ? floatval($var) : false;
}

// Clean XSS attempts using different contexts
function xssClean($data,$type) {

	// === html ===
	if ($type == "html") {
		$bad  = array("<",    ">");
		$good = array("&lt;", "&gt;");
	}

	// === style ===
	if ($type == "style") {
		$bad  = array("<",    ">",    "\"",     "'",      "``",      "(",      ")",      "&",     "\\\\");
		$good = array("&lt;", "&gt;", "&quot;", "&apos;", "&grave;", "&lpar;", "&rpar;", "&amp;", "&bsol;");
	}

	// === attribute ===
	if ($type == "attribute") {
		$bad  = array("\"",     "'",      "``");
		$good = array("&quot;", "&apos;", "&grave;");
	}

	// === script ===
	if ($type == "script") {
		$bad  = array("<",    ">",    "\"",     "'",      "\\\\",   "%",        "&");
		$good = array("&lt;", "&gt;", "&quot;", "&apos;", "&bsol;", "&percnt;", "&amp;");
	}

	// === url ===
	if ($type == "url") {
		if(preg_match("#^(?:(?:https?|ftp):{1})\/\/[^\"\s\\\\]*.[^\"\s\\\\]*$#iu",(string)$data,$match)) {
			return $match[0];
		} else {
			return 'javascript:void(0)';
		}
	}

	$output = str_replace($bad, $good, $data);
	return $output;
}


// Clean PHP code injection attempts
function injClean($data) {
	$output = str_replace("(", "", str_replace(")", "", str_replace(";", "", $data)));
	return $output;
}

// returns a UTF8 based string with any UFT8 BOM removed
function toUTF8noBOM($string,$message) {
	global $text;
	$t = $text['settings-common'];

	// Attempt to detect encoding
	if (function_exists('mb_detect_encoding')) {
		$strictUTF8 = mb_detect_encoding($string, 'UTF-8', true);
		// Establish a BOM
		$bom = pack("CCC", 0xef, 0xbb, 0xbf);
		// If there's a BOM in the first few chars
		if (0 === strncmp($string, $bom, 3)) {
			// If there's a BOM followed by a Windows based (2 char) line ending
			// chop BOM off and prefix returned string with a PHP_EOL
			if (0 === strncmp($string, $bom."\r\n", 3)) {
				$string = PHP_EOL.substr($string, 3);
			// Else, simply chop off the BOM
			} else {
				$string = substr($string, 3);
			}
		}
		// Remove any other BOMs from view
		$string = preg_replace('/'.$bom.'/','',$string); 

		// Test for any bad characters
		$teststring = $string;
		$teststringBroken = utf8_decode($teststring);
		$teststringConverted = iconv("UTF-8", "UTF-8//IGNORE", $teststringBroken);
		// If we have a matching length, UTF8 encode it
		if (!$strictUTF8 && strlen($teststringConverted) == strlen($teststringBroken)) {
			$string = utf8_encode($string);
			if ($message) {
				echo "top.ICEcoder.message('".$t['Your document does...'].".');";
			}
		}
	}
	return $string;
}

// Polyfill for array_replace_recursive, which is in PHP 5.3+
if (!function_exists('array_replace_recursive')) {
	function array_replace_recursive($base, $replacements) {
		foreach (array_slice(func_get_args(), 1) as $replacements) {
			$bref_stack = array(&$base);
			$head_stack = array($replacements);

			do {
				end($bref_stack);

				$bref = &$bref_stack[key($bref_stack)];
				$head = array_pop($head_stack);

				unset($bref_stack[key($bref_stack)]);

				foreach (array_keys($head) as $key) {
					if (isset($key, $bref) && is_array($bref[$key]) && is_array($head[$key])) {
						$bref_stack[] = &$bref[$key];
						$head_stack[] = $head[$key];
					} else {
						$bref[$key] = $head[$key];
					}
				}
			} while(count($head_stack));
		}

		return $base;
	}
}

// Get number of versions total for a file
function getVersionsCount($fileLoc,$fileName) {
	global $context;
	$count = 0;
	$dateCounts = array();
	$backupDateDirs = array();
	// Establish the base, host and date dirs within...
	$backupDirBase = str_replace("\\","/",dirname(__FILE__))."/../backups/";
	$backupDirHost = isset($ftpSite) ? parse_url($ftpSite,PHP_URL_HOST) : "localhost";
        // check if folder exists if local before enumerating contents
        if(!isset($ftpSite)) {
                if(is_dir($backupDirBase.$backupDirHost)) {
                        $backupDateDirs = scandir($backupDirBase.$backupDirHost,1);
                }
        } else {
                $backupDateDirs = scandir($backupDirBase.$backupDirHost,1);
        }
	// Get rid of . and .. from date dirs array
	for ($i=0; $i<count($backupDateDirs); $i++) {
		if ($backupDateDirs[$i] == "." || $backupDateDirs[$i] == "..") {
			array_splice($backupDateDirs,$i,1);
			$i--;
		}
	}
	// Check the backup index in each dir and add up the counts from matching lines
	for ($i=0; $i<count($backupDateDirs); $i++) {
		$backupIndex = $backupDirBase.$backupDirHost."/".$backupDateDirs[$i]."/.versions-index";
		// Have a .versions-index file? Get contents
		if (file_exists($backupIndex) && is_readable($backupIndex)) {
			$versionsInfo = getData($backupIndex);
			$versionsInfo = explode("\n",$versionsInfo);
			// For each line, check if it's our file and if so, add the count to our $count value and $dateCount array
			for ($j=0; $j<count($versionsInfo); $j++) {
				// Replace any backslashes in $fileLoc
				$fileLoc = str_replace("\\","/",$fileLoc);
				// Join $fileLock and $fileName into a path and replace double slashes
				$fileRef = str_replace("//","/",$fileLoc."/".$fileName." = ");
				// Check if we have a match
				if (strpos($versionsInfo[$j],$fileRef) === 0) {
					// We have a match, so split on the " = " and we can grab number as 2nd part
					$lineInfo = explode(" = ",$versionsInfo[$j]);
					$count += intval($lineInfo[1]);
					$dateCounts[$backupDateDirs[$i]] = intval($lineInfo[1]);
				}
			}
		}
	}

	return array(
		"count" => $count,
		"dateCounts" => $dateCounts
	);
}
?>