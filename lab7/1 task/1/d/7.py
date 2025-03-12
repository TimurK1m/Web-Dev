a=list(map(int,input().split()))

b=0
d=0
for i in range (0,len(a)):
    if a[i]>b:
        b=a[i]
        d=i
print(b,d)