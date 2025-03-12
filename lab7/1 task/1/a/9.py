a=int(input())
b=0
c=100
while (True):
    b+=a//c
    a=a%c
    c=c//10
    if a ==0:
        break
print(b)