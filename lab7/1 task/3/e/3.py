def si(a,b):
    if a==6 or b==6:
        return 1
    elif a+b==6 or a-b==6 or b-a==6:
        return 1
    else:
        return 0