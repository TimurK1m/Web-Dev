def lap_year(a):
    leap=False
    if a %4==0:
        if a%400==0:
            leap=True
        else:
            leap=False
    return leap

a=int(input())
print(lap_year(a))