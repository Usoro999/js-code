def is_prime(n):
    if n / n == 1 and n/1 == n and isinstance(n, int):
        return True
    else:
        return False
    
print(is_prime(6))