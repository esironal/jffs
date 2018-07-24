document.writeln("<!DOCTYPE html PUBLIC \'-//W3C//DTD XHTML 1.0 Transitional//EN\' \'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\'>");
document.writeln("<html xmlns=\'http://www.w3.org/1999/xhtml\'>");
document.writeln("");
document.writeln("<head>");
document.writeln("	<meta http-equiv=\'Content-Type\' content=\'text/html; charset=utf-8\' />");
document.writeln("	<title>AppMack</title>");
document.writeln("	<base href=\'/\'>");
document.writeln("	<link rel=\'icon\' href=\'favicon.ico\' type=\'image/x-icon\' />");
document.writeln("");
document.writeln("	<link href=\'dwz/themes/silver/style.css\' rel=\'stylesheet\' type=\'text/css\' media=\'screen\' />");
document.writeln("	<link href=\'dwz/themes/css/core.css\' rel=\'stylesheet\' type=\'text/css\' media=\'screen\' />");
document.writeln("	<link href=\'dwz/themes/css/print.css\' rel=\'stylesheet\' type=\'text/css\' media=\'print\' />");
document.writeln("");
document.writeln("	<!--[if lt IE 9]><script src=\'js/speedup.js\' type=\'text/javascript\'></script><script src=\'js/jquery-1.11.3.min.js\' type=\'text/javascript\'></script><![endif]-->");
document.writeln("	<!--[if gte IE 9]><!-->");
document.writeln("	<script src=\'dwz/js/jquery-2.1.4.min.js\' type=\'text/javascript\'></script>");
document.writeln("	<!--<![endif]-->");
document.writeln("");
document.writeln("	<script src=\'dwz/bin/dwz.min.js\' type=\'text/javascript\'></script>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!-- Codmirror -->");
document.writeln("");
document.writeln("");
document.writeln("<script type = \'text/javascript\'>");
document.writeln("	$(function() {");
document.writeln("		DWZ.init(\'dwz/dwz.frag.xml\', {");
document.writeln("			loginUrl: \'login_dialog.html\',");
document.writeln("			loginTitle: \'\',");
document.writeln("			statusCode: {");
document.writeln("				ok: 200,");
document.writeln("				error: 300,");
document.writeln("				timeout: 301");
document.writeln("			}, //");
document.writeln("			pageInfo: {");
document.writeln("				pageNum: \'pageNum\',");
document.writeln("				numPerPage: \'numPerPage\',");
document.writeln("				orderField: \'orderField\',");
document.writeln("				orderDirection: \'orderDirection\'");
document.writeln("			}, //");
document.writeln("			keys: {");
document.writeln("				statusCode: \'statusCode\',");
document.writeln("				message: \'message\'");
document.writeln("			}, //");
document.writeln("			ui: {");
document.writeln("				hideMode: \'offsets\'");
document.writeln("			}, //’display’，’offsets’’display’");
document.writeln("			debug: false, // true|false");
document.writeln("			callback: function() {");
document.writeln("				initEnv();");
document.writeln("				$(\'#themeList\').theme({");
document.writeln("					themeBase: \'themes\'");
document.writeln("				}); // themeBase indexbase");
document.writeln("			}");
document.writeln("		});");
document.writeln("	}); ");
document.writeln("	</script>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("</head>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<body>");
document.writeln("");
document.writeln("");
document.writeln("	<div id=\'layout\'>");
document.writeln("");
document.writeln("");
document.writeln("		<!-- navMenu -->");
document.writeln("");
document.writeln("		<div id=\'leftside\'>");
document.writeln("			<div id=\'sidebar_s\'>");
document.writeln("				<div class=\'collapse\'>");
document.writeln("					<div class=\'toggleCollapse\'>");
document.writeln("						<div></div>");
document.writeln("					</div>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("			<div id=\'sidebar\'>");
document.writeln("				<div class=\'toggleCollapse\'>");
document.writeln("					<h2>Main Menu</h2>");
document.writeln("					<div>Shrink</div>");
document.writeln("				</div>");
document.writeln("");
document.writeln("				<div class=\'accordion\' fillSpace=\'sidebar\'>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("					<div class=\'accordionHeader\'>");
document.writeln("						<h2><span>Folder</span>Apps</h2>");
document.writeln("					</div>");
document.writeln("");
document.writeln("					<div class=\'accordionContent\'>");
document.writeln("						<ul class=\'tree treeFolder\'>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Home</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/mysearch\' target=\'navTab\' rel=\'search\'>Search</a></li>");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/Repo.js/\' target=\'navTab\' rel=\'esironal.github.io\'>esironal.github.io</a></li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://codr.io/fy1rel5\' target=\'navTab\' rel=\'fy1rel5\'>My Note Pad</a></li>");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://codr.io/yfg14d4\' target=\'navTab\' rel=\'yfg14d4\'>Photon Demo Shell</a></li>");
document.writeln("");
document.writeln("");
document.writeln("		<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("	</ul>");
document.writeln("		</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://clintberry.com/2013/html5-desktop-apps-with-brackets-shell/\' target=\'navTab\' rel=\'BracketsShell\'>Brackets Shell</a></li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Server</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a>CDN</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'https://cdnjs.com/\' target=\'_blank\' rel=\'CDN-Js\'>CDN Js</a></li>");
document.writeln("<li><a href=\'https://www.jsdelivr.com/\' target=\'navTab\' rel=\'Jsdelivr\'>Jsdelivr</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Router Config</a>");
document.writeln("	<ul>");
document.writeln("<li><a href=\'http://leanote.com/s/5aa11f32d62b9e4d78000000\' target=\'navTab\' rel=\'uuid\'>uuidv3.DNS</a>");
document.writeln("");
document.writeln("<li><a href=\'/settings/admin-access.asp\' target=\'navTab\' rel=\'tomato\'>Topmato</a></li>");
document.writeln("");
document.writeln("<li><a href=\'simplenote\' target=\'navTab\' rel=\'simplenote\'>Simple Note</a></li>");
document.writeln("");
document.writeln("<li><a href=\'code.html\' target=\'navTab\' rel=\'CodeM\'>CodeMirror</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://jsonviewer.stack.hu/\' target=\'navTab\' rel=\'jsonviewer\'>Json Viewer</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://192.168.1.1/admin-scripts.asp\' target=\'navTab\' rel=\'scripts\'>Developers Feed</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://192.168.1.254\' target=\'navTab\' rel=\'homeportal\'>Home Portal</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://urldecode.org/\' target=\'navTab\' rel=\'urldecode\'>url decode</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://leanote.com/s/5aa123a2d62b9e32d4000000\' target=\'navTab\' rel=\'Lea-build\'>Leanote Binary Build</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://revel.github.io/manual/tool.html\' target=\'navTab\' rel=\'Lea-revel\'>Revel Go Tools</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://linuxcommand.org/lc3_wss0030.php\' target=\'navTab\' rel=\'name\'>Shell to Html</a></li>");
document.writeln("<li><a href=\'http://www.yolinux.com/TUTORIALS/BashShellCgi.html\' target=\'navTab\' rel=\'BashShellCgi\'>Bash Shell Cgi</a></li>");
document.writeln("<li><a href=\'http://www.gnu.org/software/bash/manual/html_node/index.html\' target=\'navTab\' rel=\'bash\'>bash</a></li>");
document.writeln("<li><a href=\'http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html\' target=\'navTab\' rel=\'Bash-Prog\'>Bash-Prog</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Packeges</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("<li><a href=\'http://tomato.groov.pl/repo/\' target=\'navTab\' rel=\'repo\'>repo</a></li>");
document.writeln("<li><a href=\'http://tomato.groov.pl/download/Exp/\' target=\'navTab\' rel=\'Exp\'>name</a></li>");
document.writeln("<li><a href=\'http://tomato.groov.pl/download/K26RT-N/build5x-140-MultiWAN/Linksys%20E-series/\' target=\'navTab\' rel=\'MultiWAN\'>MultiWAN</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://pkg.entware.net/binaries/mipsel/Packages.html\' target=\'navTab\' rel=\'Packages\'>Packages</a></li>");
document.writeln("<li><a href=\'http://ipkg.nslu2-linux.org/feeds/optware/ddwrt/cross/stable/\' target=\'navTab\' rel=\'ddwrt\'>ddwrt</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/mips74k/packages/kernel/\' target=\'navTab\' rel=\'kernel\'>kernel</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/mips74k/packages/telephony/\' target=\'navTab\' rel=\'telephony\'>telephony</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/mips74k/packages/luci/\' target=\'navTab\' rel=\'luci\'>luci</a></li>");
document.writeln("<li><a href=\'http://pkg.entware.net/binaries/mipsel/installer/\' target=\'navTab\' rel=\'installer\'>installer</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/attitude_adjustment/12.09/brcm47xx/generic/packages/\' target=\'navTab\' rel=\'attitude\'>attitude</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/chaos_calmer/15.05.1/brcm47xx/mips74k/packages/packages/\' target=\'navTab\' rel=\'chaos\'>chaos</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/chaos_calmer/15.05.1/brcm47xx/mips74k/packages/base/\' target=\'navTab\' rel=\'chaos_base\'>chaos_base</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/chaos_calmer/15.05.1/brcm47xx/generic/packages/luci/\' target=\'navTab\' rel=\'name\'>chaos_luci</a></li>");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Openwrt Wikis</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'https://wiki.openwrt.org/doc/howto/extroot\' target=\'navTab\' rel=\'extroot\'>extroot</a></li>");
document.writeln("<li><a href=\'https://wiki.openwrt.org/doc/uci/uhttpd\' target=\'navTab\' rel=\'uhttpd\'>uhttpd</a></li>");
document.writeln("<li><a href=\'https://wiki.openwrt.org/doc/howto/http.httpd\' target=\'navTab\' rel=\'httpd\'>http.httpd</a></li>");
document.writeln("<li><a href=\'https://wiki.qnap.com/wiki/Install_Optware_IPKG\' target=\'navTab\' rel=\'ptware_IP\'>Optware_IPKG</a></li>");
document.writeln("<li><a href=\'https://wiki.openwrt.org/doc/uci/httpd\' target=\'navTab\' rel=\'httpd\'>httpd</a></li>");
document.writeln("<li><a href=\'https://wiki.openwrt.org/doc/techref/opkg\' target=\'navTab\' rel=\'opkg\'>opkg</a></li>");
document.writeln("<li><a href=\'http://www.nslu2-linux.org/wiki/pmwiki.php?pagename=Optware/PlugComputers\' target=\'navTab\' rel=\'PlugComputers\'>PlugComputers</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/whiterussian/0.9/packages/\' target=\'navTab\' rel=\'whiterussian\'>whiterussian</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/mips74k/packages/packages/\' target=\'navTab\' rel=\'snapshots\'>snapshots</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/attitude_adjustment/12.09/brcm47xx/generic/packages/\' target=\'navTab\' rel=\'generic_attitude\'>generic_attitude</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/generic/packages/packages\' target=\'navTab\' rel=\'generic_snapshots\'>generic_snapshots</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/generic/packages/luci/\' target=\'navTab\' rel=\'generic_luci\'>generic_luci</a></li>");
document.writeln("<li><a href=\'http://archive.openwrt.org/snapshots/trunk/brcm47xx/generic/packages/packages/\' target=\'navTab\' rel=\'trunk_snapshots\'>trunk_snapshots</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("		</ul>");
document.writeln("	</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Apache</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'https://wiki.apache.org/lucy/GitCheatSheet\' target=\'navTab\' rel=\'GitCheatSheet\'>GitCheatSheet</a></li>");
document.writeln("<li><a href=\'https://lucy.apache.org/\' target=\'navTab\' rel=\'Lucy\'>Apache Lucy</a></li>");
document.writeln("<li><a href=\'http://directory.apache.org/\' target=\'navTab\' rel=\'directory\'>directory</a></li>");
document.writeln("<li><a href=\'https://kudu.apache.org/\' target=\'navTab\' rel=\'kudu\'>kudu</a></li>");
document.writeln("<li><a href=\'http://kylin.apache.org/\' target=\'navTab\' rel=\'kylin\'>kylin</a></li>");
document.writeln("<li><a href=\'http://www.trieuvan.com/apache/cordova/platforms/\' target=\'navTab\' rel=\'cordova\'>cordova</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Notes</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'https://leanote.com/note\' target=\'navTab\' rel=\'leanote\'>Leanote</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://app.simplenote.com/\' target=\'_blank\' rel=\'simplenote\'>Simplenote</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://raindrop.io/\' target=\'navTab\' rel=\'raindrop\'>Raindrop</a></li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://codr.io/q1ltrqx\' target=\'navTab\' rel=\'q1ltrqx\'>Shell Notes</a></li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'https://knote.com/\' target=\'_blank\' rel=\'knote\'>Knote</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://raindrop.io/collection/2908572\' target=\'navTab\' rel=\'2908572\'>Page Drops</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://codr.io/\' target=\'navTab\' rel=\'codr.io\'>Codr.io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://my.notepad.io/\' target=\'navTab\' rel=\'notepad.io\'>Notepad.io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://dictation.io\' target=\'navTab\' rel=\'dictation.io\'>Dictation.io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://app.gistboxapp.com/\' target=\'navTab\' rel=\'GistBox\'>GistBox</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://prose.io\' target=\'navTab\' rel=\'Prose.io\'>Prose.io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://github-pages.saved.io/\' target=\'navTab\' rel=\'github-pages.saved.io\'>github-pages.saved.io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://myjson.com/\' target=\'_blank\' rel=\'myjson\'>MyJson</a></li>");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Search</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'https://start.duckduckgo.com/\' target=\'navTab\' rel=\'duckduckgo\'>Duck Duck Go</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/mysearch\' target=\'navTab\' rel=\'search\'>Search</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/my-repos/\' target=\'navTab\' rel=\'Contributions\'>Contributions</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/hubsearch\' target=\'navTab\' rel=\'hubsearch\'>hubsearch</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://mapbox.github.io/github-org-browser/\' target=\'navTab\' rel=\'github-org-browser\'>GitHub Org Browser</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://github-searcher.herokuapp.com/\' target=\'navTab\' rel=\'github-searcherr\'>Github Repo Search</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://github.com/search/advanced\' target=\'_blank\' rel=\'github-searche-advanced\'>Github Search Advanced</a></li>");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Local Apps</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/Repo.js/\' target=\'navTab\' rel=\'esironal.github.io\'>esironal.github.io</a></li>");
document.writeln("<li><a href=\'http://git.oschina.net/esironal/esironal\' target=\'_blank\' rel=\'oschina.io\'>oschina.io-esironal</a></li>");
document.writeln("");
document.writeln("");
document.writeln("		<!-- ");
document.writeln("<li><a href=\'contributions/\' target=\'navTab\' rel=\'Contributions\'>Contributions</a></li>");
document.writeln(" -->");
document.writeln("<li><a href=\'http://esironal.oschina.io/online-json-tree-viewer/\' target=\'navTab\' rel=\'json-tree\'>Json Tree</a></li>");
document.writeln("<li><a href=\'http://esironal.oschina.io/codemagic/\' target=\'navTab\' rel=\'codemagic\'>codemagic</a></li>");
document.writeln("");
document.writeln("<li><a href=\'notes.txt\' target=\'navTab\' external=\'true\'>notes.txt</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://esironal.oschina.io/cmtouch/\' target=\'navTab\' external=\'true\'>CodeMirror</a></li>");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>Remote Apps</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'https://thinkery.me/esironal\' target=\'navTab\' rel=\'thinkery\'>Thinkery</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://start.me/p/WAaD0y/startpage\' target=\'navTab\' rel=\'start.me\'>Start.Me</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://syframework.alwaysdata.net/\' target=\'navTab\' rel=\'SyBox PHP\'>SyBox</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://fanyi.baidu.com/\' target=\'navTab\' rel=\'baidutranslate\'>Baidu Translate</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://oauth.io/dashboard/app/4Hw-m_7wS5TKzv_NFkWWaia6lnQ\' target=\'navTab\' rel=\'oauth.io\'>OAuth.io</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<li><a>PlayGrounds</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("<li><a href=\'https://jsconsole.com/\' target=\'navTab\' rel=\'jsconsole\'>Js Console</a></li>");
document.writeln("<li><a href=\'http://json2table.com/\' target=\'navTab\' rel=\'json2table\'>Json 2 Table</a></li>");
document.writeln("<li><a href=\'http://liveweave.com/\' target=\'navTab\' rel=\'LiveWeave\'>LiveWeave</a></li>");
document.writeln("<li><a href=\'https://apigee.com/console/github\' target=\'navTab\' rel=\'Apigee");
document.writeln("	Github\'>apigee</a></li>");
document.writeln("<li><a href=\'https://coolors.co\' target=\'navTab\' rel=\'coolors.co\'>coolors.co</a></li>");
document.writeln("<li><a href=\'http://www.generatecss.com/\' target=\'navTab\' rel=\'Generate-CSS\'>Generate CSS</a></li>");
document.writeln("<li><a href=\'http://www.bestcssbuttongenerator.com/\' target=\'navTab\' rel=\'cssbuttongenerator\'>CSS Button Generator</a></li>");
document.writeln("<li><a href=\'http://tmtheme-editor.herokuapp.com/\' target=\'navTab\' rel=\'tmtheme-editor\'>Theme Editor</a></li>");
document.writeln("<li><a href=\'http://dabblet.com/\' target=\'navTab\' rel=\'dabblet\'>Dabblet CSS  Editor</a></li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("");
document.writeln("");
document.writeln("<li><a>FrameWorks</a>");
document.writeln("	<ul>");
document.writeln("");
document.writeln("");
document.writeln("<li><a href=\'http://devdocs.io/\' target=\'navTab\' rel=\'devdocs.io\'>DevDocs.Io</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://keyvalue.xyz/\' target=\'navTab\' rel=\'keyvalue\'>Key Value</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://golden-layout.com/\' target=\'navTab\' rel=\'golden-layout\'>Golden Layout</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://api.jquery.com/jQuery.ajax/\' target=\'navTab\' rel=\'jQuery.ajax\'>jQuery.ajax</a></li>");
document.writeln("");
document.writeln("<li><a href=\'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics\' target=\'_blank\' rel=\'JavaScript_basics\'>JavaScript_basics</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://snackjs.com/\' target=\'navTab\' rel=\'snackjs\'>snackjs</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://alloyui.com/examples/\' target=\'navTab\' rel=\'alloyui\'>alloyui</a></li>");
document.writeln("<li><a href=\'http://webix.com/demos/\' target=\'navTab\' rel=\'webix\'>Webix</a></li>");
document.writeln("<li><a href=\'http://www.jeasyui.com/demo/main/index.php\' target=\'navTab\' rel=\'EasyUI\'>EasyUI</a></li>");
document.writeln("<li><a href=\'http://jquery-jkit.com/\' target=\'navTab\' rel=\'jkit\'>Jkit</a></li>");
document.writeln("");
document.writeln("<li><a href=\'http://json2html.com/\' target=\'navTab\' rel=\'json2html\'>json2html</a></li>");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("<!--");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("-->");
document.writeln("						</ul>");
document.writeln("					</div>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("					<div class=\'accordionHeader\'>");
document.writeln("						<h2><span>Folder</span>Github</h2>");
document.writeln("					</div>");
document.writeln("");
document.writeln("					<div class=\'accordionContent\'>");
document.writeln("");
document.writeln("						<ul class=\'tree treeFolder\'>");
document.writeln("");
document.writeln("<li><a>Other</a>");
document.writeln("");
document.writeln("	<ul id=\'other\'></ul>");
document.writeln("");
document.writeln("</li>");
document.writeln("");
document.writeln("						</ul>");
document.writeln("");
document.writeln("						<ul class=\'tree treeFolder\'>");
document.writeln("");
document.writeln("<li><a>Repos</a>");
document.writeln("");
document.writeln("	<ul id=\'myrepos\'></ul>");
document.writeln("");
document.writeln("</li>");
document.writeln("");
document.writeln("						</ul>");
document.writeln("					</div>");
document.writeln("");
document.writeln("<!-- Add JSON2HTML -->");
document.writeln("	<script type=\'text/javascript\' src=\'lib/json2html/json2html.js\'></script>");
document.writeln("");
document.writeln("	<!-- Add GitHub.bundle -->");
document.writeln("	<script src=\'//npmcdn.com/github-api/dist/GitHub.bundle.min.js\'></script>");
document.writeln("");
document.writeln("	<!-- Add JSON2HTML -->");
document.writeln("	<script type=\'text/javascript\' src=\'lib/base64.js\'></script>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("					<script>");
document.writeln("						/* Write JavaScript here */");
document.writeln("						var token64 = \'YjA4ODQ4OTdiZjE3ZDcwMzBhY2Y2MTJkYzZhY2Y1OTRmOWI2ZDBmYg==\';");
document.writeln("");
document.writeln("						var tokendec = Base64.decode(token64);");
document.writeln("						// token auth");
document.writeln("						var gh = new GitHub({");
document.writeln("token: (tokendec)");
document.writeln("						});");
document.writeln("");
document.writeln("						var esironal = gh.getUser(\'esironal\');");
document.writeln("");
document.writeln("");
document.writeln("						esironal.listRepos(function(err, repos) {");
document.writeln("// look at all the repos!");
document.writeln("var transform = {");
document.writeln("	\'<>\': \'li\',");
document.writeln("	\'html\': [{");
document.writeln("		\'<>\': \'a\',");
document.writeln("		\'href\': \'${html_url}\',");
document.writeln("		\'target\': \'_blank\',");
document.writeln("		\'rel\': \'${id}\',");
document.writeln("		\'html\': \'${name}\'");
document.writeln("	}]");
document.writeln("};");
document.writeln("");
document.writeln("");
document.writeln("document.getElementById(\'myrepos\').innerHTML = json2html.transform(repos, transform);");
document.writeln("");
document.writeln("						});");
document.writeln("					</script>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("					<!--");
document.writeln("");
document.writeln("					<div class=\'accordionHeader\'>");
document.writeln("						<h2><span>Folder</span>New Accordion</h2>");
document.writeln("					</div>");
document.writeln("					<div class=\'accordionContent\'>");
document.writeln("						<ul class=\'tree treeFolder treeCheck\'>");
document.writeln("");
document.writeln("                            ");
document.writeln("");
document.writeln("<li><a>New Folder</a>");
document.writeln("	<ul>");
document.writeln("		");
document.writeln("		");
document.writeln("	<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("	<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("	<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("	<li><a href=\'link\' target=\'navTab\' rel=\'name\'>name</a></li>");
document.writeln("");
document.writeln("");
document.writeln("	</ul>");
document.writeln("</li>");
document.writeln("");
document.writeln("");
document.writeln("                            ");
document.writeln("						</ul>");
document.writeln("</div>");
document.writeln("                    ");
document.writeln("    -->");
document.writeln("");
document.writeln("");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("		<div id=\'container\'>");
document.writeln("			<div id=\'navTab\' class=\'tabsPage\'>");
document.writeln("				<div class=\'tabsPageHeader\'>");
document.writeln("					<div class=\'tabsPageHeaderContent\'>");
document.writeln("						<!-- class=\'tabsPageHeaderMargin\' -->");
document.writeln("						<ul class=\'navTab-tab\'>");
document.writeln("<li tabid=\'main\' class=\'main\'><a href=\'javascript:;\'><span><span class=\'home_icon\'>Home</span></span></a>");
document.writeln("</li>");
document.writeln("						</ul>");
document.writeln("					</div>");
document.writeln("					<div class=\'tabsLeft\'>left</div>");
document.writeln("					<!--  class=\'tabsLeft tabsLeftDisabled\' -->");
document.writeln("					<div class=\'tabsRight\'>right</div>");
document.writeln("					<!-- class=\'tabsRight tabsRightDisabled\' -->");
document.writeln("					<div class=\'tabsMore\'>more</div>");
document.writeln("				</div>");
document.writeln("");
document.writeln("				<ul class=\'tabsMoreList\'>");
document.writeln("			<li><a href=\'javascript:;\'>My Home Page</a>");
document.writeln("					</li>");
document.writeln("				</ul>");
document.writeln("");
document.writeln("");
document.writeln("				<!-- Main Content Area -->");
document.writeln("				<div class=\'navTab-panel tabsPageContent layoutBox\'>");
document.writeln("");
document.writeln("");
document.writeln("					<div class=\'page unitBox\'>");
document.writeln("");
document.writeln("						<iframe src=\'http://192.168.1.1/\' style=\'width:100%;height:525px;\' frameborder=\'no\' border=\'0\' marginwidth=\'0\' marginheight=\'0\'></iframe>");
document.writeln("");
document.writeln("					</div>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("				</div>");
document.writeln("				<!-- End Main Content Area -->");
document.writeln("");
document.writeln("");
document.writeln("			</div>");
document.writeln("");
document.writeln("		</div>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("	</div>");
document.writeln("");
document.writeln("");
document.writeln("	<div id=\'footer\'>Copyright &copy; 2016 <a href=\'http://esironal.github.io\' target=\'dialog\'>esironal.github.io</a>");
document.writeln("	</div>");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln(" ");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("");
document.writeln("</body>");
document.writeln("");
document.writeln("</html>");