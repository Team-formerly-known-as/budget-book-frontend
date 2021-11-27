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
  

  const expenseHtml = props.user.expenses.map(lineItem => {
    return(
      <div>
        <p className="item-expense" key={lineItem._id}><span className="list-item">{lineItem.detail}</span> <span className="list-amount">${lineItem.amount}</span></p>
        <button className="secondaryButton">Edit</button>
        <button className="secondaryButton" onClick={() => {handleDelete(lineItem._id)}}>Delete</button>
      </div>
    )
  })
  console.log(props.user)
  


  return (
		<div className='expense-box'>
			<div className='userInfo'>
				<p className='userName'><span className='firstWord'> User </span><span className='secondWord'>{props.user.userName}</span></p>
				<p className='income'><span className='firstWord'> Income </span><span className='secondWord'>${props.user.income}</span></p>
				<p className='balRemainder'><span className='firstWord'> Balance </span><span className='secondWord'>${props.user.remainder}</span></p>
			</div>

			<div className='expense-list-box'>
        <p className='expense-list'>{expenseHtml}</p>
      </div>

			<div className='expense-input-box'>
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
