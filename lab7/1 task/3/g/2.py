def co(a):
    s="coe"
    c=0
    for i in range(0,len(a)-3):
        if s==a[i:i+2]+a[i+3]:
            c+=1
    return c
        
print(co("cozexxcope"))