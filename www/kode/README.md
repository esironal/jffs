KodExplorer (http://kalcaddle.com/)
========
  KodExplorer is an open source Web-based online document management, code editor. It provides classes windows Classic user interface, a set of online file management, file preview, editing, uploading and downloading, online decompress, music playback. Allows you to achieve web development directly in the browser, to preview the source files, website deployment. Also has local operations as easy, fast and safe experience.
 `Business Edition license, please contact: kalcaddle # qq.com`
 
#### 1. What is:
 - KodExplorer the sails studio developed a network server file management program.
 - A perfect replacement for FTP Management: document management for server, zip decompress, backup and restore
 - Support for common file preview: support for images, music, video preview, office, pdf format online preview.
 - Upload: Upload file fragmentation; to ensure the overall experience with the problem of large file uploads. Drag the folder to upload .......
 - Easily download: you can download directly to a folder directly downloaded marquee
 - Share: you can put your documents or folders directly share it for others to view or download
 - Online Programming: supports almost all programming languages ​​online editing (Highlight, more comparable to a local cursor editor sublime); automatic display function list
 - Excellent operating experience: its convenient shortcuts support, so you have localized experiences
 - Chinese and other multi-language support: Chinese encoding is fully compatible, document editing automatic adaptation.
 - Super speed: full use of Ajax + Json data communication, millisecond response speed;
 - Full-platform compatibility: Win Linux Mac (Apache, Nginx, IIS)

#### 2. Use the scene:
 - Replace FTP, server, client software installation and other complex configurations. kod can use a key to install everywhere.
 - You can use it to manage your server (backup, online decompression, release ....)
 - You can manage him as a linux operating system interface
 - Can be used as a private cloud storage systems, store your files ...
 - Of course, you can also be used to share files
 - Web IDE
 - More scenes waiting for you to dig! ......

#### 3. Instructions
    Administrator: admin / admin
    Average user: demo / demo
    Guest User: guest / guest

    [How to use] download, unzip uploaded to your server path, data directory set 777 permissions. Ultra-convenient service access experience it!
    (To ensure data security, it is best to configure the server does not allow directory listing)
    [About upload problem] program does not do any restrictions, if need to upload large files, modify
      php.ini: `upload_max_filesize = 1000M post_max_size = 1000M` [Details: http: //955.cc/R2yT]
      Note that not more than 2g, might otherwise cause php can not function properly (no post).
    [About decompression problems] program without any restrictions, if they fail, set php memory limit. memory_limit 1000M
    [About decompression garbled] linux server compression, downloaded to Chinese garbled under windows. Because the system is a result. So try not to cross-system operation.
    [About the "System error"] configure php error level error_reporting; configuration php.ini error_reporting function or allow
    [On compatibility] recommend using chrome firefox ie9 + experience more complete. ie8 basically not compatible with the following process. chrome supports folder drag and drop uploading.
    [Open File] office documents online preview function, the server must be public (external access to the server);
        Internal or LAN to use please refer qq group shared "web office building", and then configure kod program config / config.php OFFICE_SERVER
    [Safety Tips] To ensure data security, set the http server does not allow directory listing. [Details: http: //955.cc/R2vw]
    [Forgot password] Change data / system / member.php plaintext password md5 value, for example, will reset the password admin admin
        Then modify the first line: "name": "admin", "password": "21232f297a57a5a743894a0e4a801fc3"

    [] In addition to drag and drop files to upload most browsers support ie8 below; recommend the use of chrome, 360, cheetah, uc, etc.
    [Folders] except ie10 less drag and drop upload, firefox most browsers support recommended chrome, 360, cheetah, uc, etc.


![](https://cloud.githubusercontent.com/assets/3761968/2583304/764f562a-b9cf-11e3-8e59-afdbdffc20eb.png)

## editor
![](https://cloud.githubusercontent.com/assets/3761968/2583309/7fd52f8a-b9cf-11e3-8052-b4f908fd5209.png)


## player
![](https://cloud.githubusercontent.com/assets/3761968/2583312/84462bf0-b9cf-11e3-8b00-96fb3fc1610e.png)

## desktop
![](https://cloud.githubusercontent.com/assets/3761968/2583348/1b260572-b9d0-11e3-8f3e-3004dbbc63c9.png)

