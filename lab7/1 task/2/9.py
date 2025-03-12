a=int(input())
s=[]
d=[]
for i in range(0,a):
    b=str(input())
    c=float(input())
    s.append([b,c])
s.sort(key=lambda x: x[1])
i=0
c=s[i]
while i<len(s):
    if s[i][1]>c[1]:
        c=s[i]
        d.append(c)
        break
    i+=1
for i in range(0,len(s)):
    if c[1]==s[i][1]:
        if s[i] in d:
            continue
        else:
            d.append(s[i])

print(sorted(d))

