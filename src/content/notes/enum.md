---
title: "Enumeration"
description: "Some Notes on How I enumerate different ports"
publishedAt: 2023-01-06
category: "Development"
---

Quick reference for common port enumeration:

## SMB 

```bash
smbmap -u '' -p '' -R -H 192.168.249.64

smbclient -N -L  //10.10.10.172 

smb: \> recurse 

smb: \> prompt off 

smb: \> mget * 
```

If you see anonymous, check permissions of anonymous user 
![SMB Anon](/src/assets/images/enum/smb/anon.png)


```bash
└─$ smbmap -u anonymous -H 10.10.9.155 
```
![SMB Anon](/src/assets/images/enum/smb/anon2.png)

Change Password:
```bash
└─$ smbpasswd -r 10.10.10.193 -U bhult 
``` 
![SMB Anon](/src/assets/images/enum/smb/change.png)



## SNMP  

```bash
snmpwalk -c public -v1 192.168.232.149 1.3.6.1.4.1.1452.1.2.5.1.3.21.1.4.7 -Oa 

└─$ snmpwalk -v 2c -c public 192.168.232.149 NET-SNMP-EXTEND-MIB::nsExtendOutputFull 

└─$ snmpwalk -v 2c -c public 192.168.232.149 NET-SNMP-EXTEND-MIB::nsExtendObjects 

snmp-check 192.168.200.42 
``` 
SNMP port is open, think snmpwalk 
```bash
└─$ snmpwalk -v 2c -c public 10.10.10.116  
``` 

[[161 - SNMP]] 

Enumerate community strings on v1 and v2 

```bash
sudo nmap -sU -p 161 --script snmp-brute 192.168.194.149 

Try to get useful information from accessible communities 

snmpwalk -v 1 -c public 192.168.194.149 NET-SNMP-EXTEND-MIB::nsExtendObjects 

snmpwalk -v2c -c public 192.168.194.149 | grep <string> 
``` 



## Enum4Linux 


Enumerate users in  AD: 
```bash
└─$ enum4linux -U 10.129.164.218 | grep 'user:' | sed 's/user:\[//g' | sed 's/\]//g'  

enum4linux -U 10.10.10.161 | grep 'user:' | sed 's/user:\[//g' | sed 's/\]//g' | awk '{print $1}' | tee users.txt 

└─$ enum4linux -u 'Alexander.knight@gmail.com' -p 'al;ksdhfewoiuh' -a 10.10.11.16 
``` 


## VNC Passwd decode 

```bash
└─$ git clone https://github.com/trinitronx/vncpasswd.py.git                     

└─$ cd vncpasswd.py       
└─$ python2 ./vncpasswd.py -d -H 6bcf2a4b6e5aca0f 
``` 
![VNC Decode](/src/assets/images/enum/vnc/1.png)

![VNC Decode](/src/assets/images/enum/vnc/2.png)

Decode VNC password using vncpasswd.py 

https://github.com/trinitronx/vncpasswd.py/blob/master/vncpasswd.py 

 

![VNC Decode](/src/assets/images/enum/vnc/3.png)

Then login via evil-winrm 

![VNC Decode](/src/assets/images/enum/vnc/4.png)



