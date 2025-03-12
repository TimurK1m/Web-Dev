a=int(input())
b=a//3600%24
c=a//60%60
d=a%60
print(f"{b:02}:{c:02}:{d:02}")