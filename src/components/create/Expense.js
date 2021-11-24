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


  

  const expenseHtml = props.user.expenses.map(lineItem => {
    return(
      <p className="itemExpense" key={lineItem._id}>{lineItem.detail}: {lineItem.amount}</p>
    )
  })

  console.log(props.user.remainder)
  


  return (
		<div className="expense-box">
			<p className='userName'>{props.user.userName}</p>
			{expenseHtml}
			<p className='balRemainder'>{props.user.remainder}</p>
			<input
				className='userExpense'
				onChange={handleChangeItem}
				type='text'
				placeholder='enter an expense'
				value={expenseName}
			/>
			<input
				className='userExpense'
				onChange={handleChangeAmount}
				type='number'
				placeholder='enter the amount'
				value={expenseAmount}
			/>
			<button className='primaryButton' onClick={handleSubmit} type='submit'>
				Add Expense
			</button>
		</div>
	);
}

export default Expense;
