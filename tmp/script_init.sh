#!/bin/sh
#!/bin/sh
sleep 5
mount -t cifs //192.168.1.250/jffs /jffs -o user=root,pass=silver333,sec=none
mount -O bind /jffs/bin/busybox /bin/busybox
#while [ true ]; do nc -e '/jffs/usr/bin/shellweb.sh' -l -p 85; done

#insmod /jffs/lib/mbcache.ko
#insmod /jffs/lib/ext2.ko
#insmod /jffs/lib/loop.ko

mount -t cifs //192.168.1.250/optware /opt -o user=root,pass=silver333,sec=none

if [ -f /var/notice/wan ]; then
   for s in /opt/etc/config/*.wanup; do $s; done
   for s in /opt/etc/config/*.fire; do $s; done 
fi

#/opt/etc/init.d/S80lighttpd start

#mount -t cifs //192.168.1.250/70gb-ntfs /jffs/www/vids -o user=root,pass=silver333,sec=none

#/opt/etc/init.d/rc.unslung start

mount -t cifs //192.168.1.250/64GB__R_ /jffs/64 -o user=,pass=,sec=none

#/jffs/bin/busybox-mipsel mount -O bind /jffs/www5 /tmp/var/wwwext

sleep 5

#/jffs/bin/busybox-mipsel httpd -p 80 -h /jffs/www


/opt/etc/init.d/S80apache


#/jffs/sbin/httpd -p 8001 -h /jffs/www
#/jffs/sbin/httpd -p 8002 -h /jffs/www2
#/jffs/sbin/httpd -p 8003 -h /jffs/www3
#/jffs/sbin/httpd -p 8004 -h /jffs/www4
#/jffs/sbin/mount -o loop /cifs1/opt.ext2 /opt
#/jffs/bin/busybox-mipsel mount -o bind /jffs/usr /usr
#/jffs/bin/busybox-mipsel mount -o loop /jffs/opt.ext2 /opt  mount -t cifs //192.168.1.250/opt /opt -o user=root,pass=silver333,sec=none
#/jffs/bin/busybox-mipsel mount -O bind /jffs/bin /bin
#/jffs/bin/busybox-mipsel mount -O bind /jffs/bin/busybox /bin/busybox
/opt/etc/init.d/rc.unslung start
#sleep 18
#/jffs/bin/busybox-mipsel httpd -p 8008 -h /jffs/www3
#/jffs/sbin/httpd -p 8002 -h /jffs/www2
#/jffs/bin/busybox-mipsel sh /usr/bin/wd3









