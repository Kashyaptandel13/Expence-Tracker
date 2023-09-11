import Button from "../UI/Button"
import Cart from "../UI/Cart"
import AddMoneyForm from "./AddMoneyForm"
import React,{useState} from 'react'
import classes from './Form.module.css'

const Form =(props)=>{
    const FormValueHandler =(e)=>{
        const NewExpense ={
            ...e,
            id:Math.random().toString()
        }
        props.onNewExpense(NewExpense)
        setAddMoneyClicked(false)
    }

    const [addMoneyClicked ,setAddMoneyClicked ]=useState(false)

    const clickHandler =()=>{
        setAddMoneyClicked (true)
    }
    const RemoveHandler=()=>{
        setAddMoneyClicked(false)
    }
    console.log(addMoneyClicked);
    return(
        <Cart className={classes.form}>
           {!addMoneyClicked && <Button className={classes.btn} type='submit' onClick={clickHandler}>Add Money</Button>} 
           {addMoneyClicked && <AddMoneyForm onSaveForm={FormValueHandler} RemoveForm={RemoveHandler}/>} 
        </Cart>
    )
}

export default Form;