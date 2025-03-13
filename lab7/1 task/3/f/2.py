def te(a,b,c):
    d,x,y=fix(a,b,c)
    return d+x+y

def fix(a,b,c):
    if 13<=a<=19:
        if a!=15 or a!=16:
            a=0
    if 13<=b<=19:
        if b!=15 or b!=16:
            b=0
    if 13<=c<=19:
        if c!=15 or c!=16:
            c=0
    return a,b,c
print(te(2,1,14))