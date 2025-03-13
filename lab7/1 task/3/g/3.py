def hi(a):
    c=0
    for i in range(0,len(a)-1):
        if a[i:i+2] =="hi":
            c+=1

    return c
print( hi("hihi"))