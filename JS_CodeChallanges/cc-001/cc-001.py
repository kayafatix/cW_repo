
# fibo_list = [0, 1]
# fibo = 1


def fibonacci():
    a = 0
    b = 0
    x = int(input("Bir sayı giriniz: "))
    for i in range(x):
        a, b = b, a+b
    print(b)


fibonacci()
