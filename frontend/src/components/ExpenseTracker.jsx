import { useState, useEffect} from "react"
import { FaPen, FaBookOpen, FaRegBookmark, FaMoneyBill, FaPiggyBank, FaChartArea, FaClock } from 'react-icons/fa'
import Chart from "./Chart"

function ExpenseTracker(){

    const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('expenses');
    return saved ? JSON.parse(saved) : [];
    });

    useEffect(()=>{
    localStorage.setItem('expenses', JSON.stringify(expenses))
    }, [expenses])
    const[form, setForm] = useState({title:'', amount:'', category:''})

    
    const addExpense = () => {
    const { title, amount, category } = form
    if(!title || !amount || !category)return;
    const newExpense = {
        id:crypto.randomUUID(),
        date: Date().slice(0, 10),
        title,
        amount:parseFloat(amount),
        category
    }
    setExpenses([...expenses, newExpense]);
    setForm({title:'', amount:'', category:''})
};
 

       

    const categoryData = Object.entries(
        expenses.reduce((acc, expense) => {
            acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
            return acc;
        }, {})
        ).map(([name, value]) => ({ name, value }));
        


    
    return(
        <section className="w-full sm:max-w-[70%] mx-auto px-4 sm:ps-6 lg:px-8 py-12">
            <div className="container mx-auto">

                <div className="flex items-center justify-center mb-9">
                    
                <h2 className="text-3xl font-medium text-blue-500 text-center mr-4">Expense Tracker</h2>
                <FaChartArea size={45} className="text-white bg-blue-500 p-2"/>

                </div>

                <div className="border-b-2"></div>
                

                
                <div className="w-full grid sm:grid-cols-3 gap-4 mt-8 mx-auto">
                    <input type="text" placeholder="Title..." onChange={(e)=>setForm({...form, title:e.target.value})} value={form.title} className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 rounded-md"/>
                    <input type="text" placeholder="amount..." onChange={(e)=>setForm({...form, amount:e.target.value})} value={form.amount} className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 rounded-md"/>
                    <input type="text" placeholder="Category..." onChange={(e)=>setForm({...form, category:e.target.value})} value={form.category} className=" px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-700 rounded-md"/>

                </div>

                <button onClick={addExpense} className="w-full my-5  px-3 py-2  text-center rounded-sm bg-gradient-to-l from-green-500 to-blue-500 hover:bg-blue-500 sm:text-xl font-medium text-white">Track</button>
            </div>

        <Chart categoryData={categoryData} expenses={expenses}/>

        <div className="p-6 mb-6 w-full mt-6 mx-auto text-blue-600 border-2 border-blue-500">
            <div className="flex items-center justify-center">
                <h2 className="text-2xl font-semibold text-center">activities</h2>
                <FaPiggyBank size={30} className=""/>
            </div>
            
            <ul className="p-4">
            {expenses.map((expense) => (
                <li key={expense.id} className="py-2 flex justify-between border-b">
                    <div className="flex items-center justify-center">
                        <span className="text-2xl ">{expense.title} ({expense.category})</span>
                        <FaClock size={20} className="sm:ml-4 sm:mt-2 sm:mr-1 hidden "/>
                        <span className="hidden sm:mt-2">{expense.date}</span>
                    </div>
                
                <span className="font-semibold text-2xl">${expense.amount.toFixed(2)}</span>
                </li>
            ))}
            </ul>
        </div>

        

        </section>
    );
}

export default ExpenseTracker;