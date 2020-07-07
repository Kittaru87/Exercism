import random
from random import randint
import string

class Robot:
    def __init__(self):
        self.name = self.random_name()
    
    def random_name(self):
        rand_num = str(randint(100, 999))

        rand_letter = ''.join(random.choice(string.ascii_uppercase) for x in range(2))

        name = rand_letter + rand_num

        return name

    def reset(self):
        self.name = self.random_name()

        
