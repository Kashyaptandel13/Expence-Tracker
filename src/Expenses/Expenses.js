import { useState } from "react";
import Cart from "../UI/Cart";
import FilteredDate from './FilteredDate'
import Data from "./Data";

const Expenses =(props)=>{
    const[editededYear,setEditededYear]=useState('2020')
    const SelectDateHandler = (e) => {
        setEditededYear(e);
      };

    let data= 
   
    <h1 style={{margin:'4rem 18rem' , color:'white'}}>No Expance</h1>
  
    const filteredYear =
         props.items.filter(item=> item.date.getFullYear().toString()===editededYear)

         console.log(filteredYear);
    const expenseDeleteHandler=(e)=>{
        props.onDeleteHandler(e)
    }
    
    if(filteredYear.length>0)(
        data = filteredYear.map(year=>
            <Data
            onDelete={expenseDeleteHandler}
            key={year.id}
            savedTitle={year.title}
            savedAmound={year.amount}
            savedDate={year.date}
            savedId={year.id}
            />)
    )
    return(
        <Cart style={{backgroundColor:'rgb(31,29,31)', marginTop:'2rem'}}>
        <FilteredDate selected={editededYear} onSelectDate={SelectDateHandler} />
        {data}
        </Cart>
    )

}

export default Expenses;