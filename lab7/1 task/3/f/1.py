def br(a,b,c):
    max_big_bricks = min(c // 5, b)  # Maximum number of big bricks that can be used
    remaining_length = c - (max_big_bricks * 5)  # Remaining length to be filled with small bricks
    return remaining_length <= a  # Check if small bricks can cover the remaining length

# Test cases
print(br(3, 1, 8))  # True
print(br(3, 1, 9))  # False
print(br(3, 2, 10))