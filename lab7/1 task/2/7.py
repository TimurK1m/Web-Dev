a=int(input())
b=int(input())
c=int(input())
d=int(input())
s=[]
for i in range(0,a+1):
    for j in range(0,b+1):
        for l in range (0,c+1):
            if i+j+l==d:
                continue
            else:
                s.append([i,j,l])
print(s)