from models import Expense
from settings import one
def generate_expense(exp_list:list)->Expense:
    expense = Expense(exp_list[0], exp_list[one], exp_list[2])
    return expense