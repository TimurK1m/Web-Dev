a=int(input())
i=0
d="No"
while 2**i<=a:
    if a==2**i:
        d="Yes"
    i+=1
print(d)