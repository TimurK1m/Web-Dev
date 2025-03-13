def ct(a):
    b="cat"
    c="dog"
    x=0
    y=0
    for i in range(0,len(a)-2):
        g=a[i:i+3]
        if g==b:
            x+=1
        elif g==c:
            y+=1
    print(x,y)
    if x==y:
        return True
    else:return False
print(ct("1cat1cadodog"))