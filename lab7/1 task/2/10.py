a=int(input())
student_marks={}
d=0
e=0
for i in range(0,a):
    name, *line = input().split()
    scores = list(map(float, line))
    student_marks[name] = scores
b=str(input())
for i in student_marks:
    c=student_marks[i]
    for j in range(0,len(c)):
        if i==b:
            e+=c[j]
        d+=c[j]
print(e//3)
