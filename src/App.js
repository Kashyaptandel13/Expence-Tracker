import Form from './Form/Form'
import Expenses from './Expenses/Expenses';
import clasess from './App.module.css'
import { useState } from 'react';


const Dummy_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];




function App() {
  const[expenses,setNewExpenses]= useState(Dummy_Expenses)
const expenseHandler =(e)=>{
  setNewExpenses([e,...expenses])
}
const deletHandler =(e)=>{
  setNewExpenses(prevExpense=> prevExpense.filter(task=>task.id!==e))
}
  return (
    <div className={clasess.main}>
      <Form onNewExpense={expenseHandler} />
      <Expenses items={expenses} onDeleteHandler={deletHandler}/>
    </div>
  );
}

export default App;
