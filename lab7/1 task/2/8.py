a=int(input())
b=list(map(int,input().split()))
b.sort(reverse=True)
i=0
c=b[0]
while i<len(b):
    if b[i]<c:
        c=b[i]
        break
    i+=1
print(c)
    
