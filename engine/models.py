class Expense:
    def __init__(self, name, amount, category)->None:
        self.name = name
        self.amount = amount
        self.category = category
        
    def __repr__(self):
        return f'{self.name}'