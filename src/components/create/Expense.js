// import handleChange from "./CreateBudget"
import { useState } from "react";

function Expense(props) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseId, setExpenseId] = useState(0);
  // const [remainingBalance, setRemainingBalance] = useState(props.user.remainder);

  function handleChangeItem(event) {
    // const input = event.target.value;
    // const name = event.target.name
    // const copy = Object.assign({}, expense)
    // copy[name] = input
    // setExpense(copy)
    // console.log(expense)

    const input = event.target.value;
    setExpenseName(input);
  }

  function handleChangeAmount(event) {
    const input = event.target.value;
    setExpenseAmount(input);
  }

  // const findRemainder = () => {
  //   let income = props.user.income
  //   for(let x = 0; x < props.user.expenses.length; x++){
  //     income = income - props.user.expenses[x].amount
  //   }
  //   setRemainingBalance(income)
  // }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:4000/expense/${props.user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        detail: expenseName,
        amount: expenseAmount,
        user:props.user._id
      }),
    })
      .then((res) => res.json())
		.then((user) => props.setUser(user))
    .then(user => {
      setExpenseName('')
      setExpenseAmount('')
      // findRemainder();
      // console.log(remainingBalance)
    })

        //router.put('/:expenseId/:userId'
        // post('route for backend', {name: expenseName, amount: expenseAmount})
      
  }


  function handleDelete (deletedId) {
    fetch(`http://localhost:4000/expense/${deletedId}/${props.user._id}`, {
      method: "DELETE",
    })
    .then(res => res.json())
    .then(data => props.setUser(data.user))
  }

  // sets the states of the item info to be updated
  function setUpdate (id) {
    setExpenseName(id.detail)
    setExpenseAmount(id.amount)
    setExpenseId(id._id)
  }

  // handleUpdate takes the states and updates the item object with them, then calls a function which calls api for updated item
  function handleUpdate () {

    let item = {expenseName, expenseAmount}
    console.log(item)
    
    fetch(`http://localhost:4000/expense/${expenseId}`, {
      method: "PUT",
      headers: {
        'Accept':'application/json',
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    }).then((res) => {
      res.json()
      .then((res) => {

      })
    })
  }
  

  const expenseHtml = props.user.expenses.map(lineItem => {
    return(
      <div>
        <p className="itemExpense" key={lineItem._id}>{lineItem.detail}: ${lineItem.amount}</p>
        <button onClick={() => {setUpdate(lineItem)}}>Edit</button>
        <button onClick={() => {handleDelete(lineItem._id)}}>Delete</button>
      </div>
    )
  })
  // console.log(props.user)


  return (
		<div className="expense-box">
			<p>Income: ${props.user.income} </p>
			{expenseHtml}
      <p className='balRemainder'> Remaining Balance: ${props.user.remainder}</p>
      <div id="edit-field">
        <h2>Edit Field</h2>
        <input 
          value={expenseName} 
          type="text"
          onChange={handleChangeItem}
        />
        <input 
          value={expenseAmount} 
          type="number"
          onChange={handleChangeAmount}
        />
        <button onClick={handleUpdate} type='submit'>Submit</button>
      </div>
      <div className="expense-input-box">
        <h2>Expense Input Box</h2>
        <input
          className='userExpense'
          onChange={handleChangeItem}
          type='text'
          placeholder='enter an expense'
          value={expenseName}
        />
        <input
          className='userAmount'
          onChange={handleChangeAmount}
          type='number'
          placeholder='enter the amount'
          value={expenseAmount}
        />
        <button className='primaryButton' onClick={handleSubmit} type='submit'>
          Add Expense
        </button>
      </div>
		</div>
	);
}

export default Expense;
