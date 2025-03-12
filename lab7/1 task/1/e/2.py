def po(a,b):
    c=a
    for i in range(0,b-1):
        c*=a
    return print(c)

a=int(input())
b=int(input())

po(a,b)