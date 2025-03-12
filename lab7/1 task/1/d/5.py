a=list(map(int,input().split()))
for i in range(0,len(a)-1):
    if a[i]<0:
        if a[i+1]<0:
            print(a[i],a[i+1])
            break
    else:
        if a[i+1]>0:
            print(a[i],a[i+1])
            break