#!/bin/bash
filename='printtittle'
n=0
printf '\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\n'
while read line; do
echo "$line"
n=$((n+1))
done < $filename
printf '\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\U1F680\n'