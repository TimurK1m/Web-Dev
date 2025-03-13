def cho(a,b,c):
    mab=min(c//5,b)
    le=c-(mab*5)
    if le>a:
        return -1
    else:
        return le
print(cho(4,1,7))