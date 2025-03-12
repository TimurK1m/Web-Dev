a=int(input())
b=0
for i in range(1,a+1):
    b+=45
    if i==a:
        continue
    else:
        if i%2==0:
            b+=15
        else:
            b+=5
c=9+b//60
d=0+b%60
print(c,d)
