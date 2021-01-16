#!/bin/bash
#sudo apt update -y && sudo apt upgrade -y \

printf "\U1F50E We need to perform some dependency check to continue...\n\n"

isWget=$(which wget) 
if [[ $isWget == *"wget"* ]]; then
    echo -e "\e[32mthe wget app already instelled \U2705"
  else
    echo -e "\e[33mwget getting install--->>>"
    echo -e "\e[39m "
    sudo apt install wget
    echo -e "\n \e[32mWget done \U2705"
fi

isCurl=$(which curl) 
if [[ $isCurl == *"curl"* ]]; then
    echo -e "\e[32mthe curl app already instelled \U2705"
  else
    echo -e "\e[33mCurl getting install--->>>"
    echo -e "\e[39m "
    sudo apt install curl
    echo -e "\n \e[32mCurl done \U2705"
fi

isNano=$(which nano) 
if [[ $isNano == *"nano"* ]]; then
    echo -e "\e[32mthe nano app already instelled \U2705"
  else
    echo -e "\e[33mNano getting install--->>>"
    echo -e "\e[39m "
    sudo apt install nano
    echo -e "\n \e[32mNano done \U2705"
fi

isGit=$(which git) 
if [[ $isGit == *"git"* ]]; then
    echo -e "\e[32mthe git app already instelled \U2705"
  else
    echo -e "\e[33mGit getting install--->>>"
    echo -e "\e[39m "
    sudo apt install git
    echo -e "\n \e[32mgit done \U2705"
fi

echo -e "\e[39m "