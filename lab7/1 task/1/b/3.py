a=int(input())
b=int(input())
c=f"{a:04}"
d=-1
e=c[::-1]
print(c,e)
if c == e:
    d=1
else:
    d=-1
if b==d:
    print("Yes")
else:
    print("No")