def ro(a,b,c):
    a,b,c=fi(a),fi(b),fi(c)
    s=a+b+c
    return s
def fi(s):
    if s%10>=5:
        s=s+10-s%10
    else:
        s=s-s%10
        return s
print(ro(12,13,14))