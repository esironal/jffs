#!/bin/bash

file=""
host="localhost"

while [ true ]
do
  read a

  a=`echo ${a} | sed 's/\r//'`

  if [ "${a}" == "" ]
  then
    break
  fi

  command=`echo ${a} | grep GET`
  if [ "${command}" != "" ]
  then
    file=`echo ${a} | awk '{ print $2 }'`
  fi

  command=`echo ${a} | grep Host:`
  if [ "${command}" != "" ]
  then
    host=`echo ${a} | awk '{ print $2 }'`
  fi

done

if [ ${file} == "/" ]
then
  file="index.html"
else
  file=`echo ${file} | sed 's/^\///'`
fi

if [ ! -e ${file} ]
then
  echo "HTTP/1.1 404 NOT FOUND"
  echo ""
  echo "Document not found"
else
  len=`ls -la ${file} | awk '{ print $5 }'`
  echo "HTTP/1.1 200 OK"
  echo "Host: ${host}"
  echo "Content-Length: ${len}"
  echo ""
  cat ${file}
fi

#To Run It

#while [ true ]; do nc -e 'shellweb.sh' -l -p 80; done





