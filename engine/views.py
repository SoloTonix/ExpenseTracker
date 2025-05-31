from settings import categories, one
from models import Expense
def display():
    print('Welcome Buddy, What are you buying')
    print(f'choose from {one} to {len(categories)}')
    for i, cat in enumerate(categories):
        print(f'{i+one}. {cat.capitalize()}')
        
def collect_data()->list:
    while True:
        try:
            category = int(input('>>> '))-one
            name = str(input('Name: '))
            amount = str(input('amount: '))
            return [name, amount, category]
        except ValueError:
            print('Invalid Input, try again')
            
        if category in range(0, len(categories)):
            break
           
        

    
        
        
    
    