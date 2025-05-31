from views import display, collect_data
from utils import generate_expense
from db import DataBaseList, DataBaseJson
db = DataBaseJson()
def main():
    # fix monthly expenditure
    # collect Input : name amount category
    # store input : list or json or csv 
    # summary
    display()
    exp_list = collect_data()
    exp_class = generate_expense(exp_list)
    db.store(exp_class)
    db.display()
    
if __name__ == '__main__':
    main()