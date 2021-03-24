def revers():
    reversed = ""
    user_input = input("Type a word:")
    left_index = 0
    right_index = len(user_input)-1

    while right_index >= left_index:
        reversed += user_input[right_index]
        right_index -= 1
    print(reversed)


revers()
