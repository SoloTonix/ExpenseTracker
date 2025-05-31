import json
from utils import generate_expense
from models import Expense
from settings import one

class DataBaseList:
    def __init__(self)->None:
        self.db = []
     
        
    def store(self, exp):
        data = {'id':len(self.db)+one, 'name': exp.name, 'amount': exp.amount, 'category' : exp.category}
        self.db.append(data)
        
    def display(self):
        print(self.db)
        
        
        
    def __repr__(self):
        return 'Your Super Expense DataBase'
    
class DataBaseJson:
    def __init__(self):
        self.file = 'engine/db.json'
        self.db = self.load_data()
       
        
    
    def store(self, exp:Expense):
        data = {'name':exp.name, 'amount':exp.amount, 'category':exp.category}
        if self.db is None:
            self.db = []
        self.db.append(data)
        with open(self.file, 'w') as file:
            json.dump(self.db, file, indent=4) 
            
    def load_data(self):
        try:
            with open(self.file, 'r') as file:
                json.load(file)
        except(FileNotFoundError, json.JSONDecodeError):
            return []
        
    def display(self):
        print(self.load_data)
            
            
            
        

