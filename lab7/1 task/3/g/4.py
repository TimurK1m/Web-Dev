def en(a,b):
    if a.lower() in b.lower()[len(b)-len(a):len(b)] or b.lower() in a.lower()[len(a)-len(b):len(a)]:
        return True
    else:
        return False
print(en("HiAbc","abc"))