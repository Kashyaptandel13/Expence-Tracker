import { useState } from "react"
import Button from "../UI/Button"

const AddMoneyForm = (props) => {
    const [editedTitle, setTitle] = useState('')
    const titleHandler = (e) => {
        setTitle(e.target.value)
    }
    const [editedAmount, setAmount] = useState('')
    const amoundHandler = (e) => {
        setAmount(e.target.value)
    }
    const [editedDate, setDate] = useState('')
    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const value = {
            title: editedTitle,
            amount: editedAmount,
            date: new Date(editedDate)
        }
        props.onSaveForm(value)
        setTitle('')
        setAmount('')
        setDate('')
    }
    return (
        <form onSubmit={submitHandler} style={{ padding: '0.25rem 1rem' }}>
            <label >
                Title
                <input style={{ marginLeft: '1rem' }} value={editedTitle} type='text' name='title' onChange={titleHandler} />
            </label >
            <label style={{ marginLeft: '2rem' }}>
                Amount
                <input style={{ marginLeft: '1rem' }} value={editedAmount} type='number' name='amount' onChange={amoundHandler} />
            </label>
            <label style={{ marginLeft: '2rem' }}>
                Date
                <input style={{ marginLeft: '1rem' }} value={editedDate} type='date' name='date' onChange={dateHandler} />
            </label>
            <div style={{ marginTop: '3rem' }}>
                <Button style={{ marginLeft: '9rem' }} onClick={props.RemoveForm}> Cancle </Button>
                <Button style={{ marginLeft: '10rem' }} type='submit' > AddExpense</Button>
            </div>
        </form>
    )
}

export default AddMoneyForm;