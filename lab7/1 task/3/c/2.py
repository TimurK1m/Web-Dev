def make(s,t):
    return s[0:len(s)//2]+t+s[len(s)//2:len(s)]
print(make("<<>>","yey"))