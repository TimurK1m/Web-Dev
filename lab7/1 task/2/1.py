a=int(input())
if a%2==0:
    if 2<=a<=5:
        print("Not Weird")
    elif(6<=a<=20):
        print("Weird")
    else:
        print("Not Weird")
else:
    print("Weird")