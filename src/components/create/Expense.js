// import handleChange from "./CreateBudget"
import { useState } from 'react'

function Expense(props) {
	const [expenseName, setExpenseName] = useState('')
	const [expenseAmount, setExpenseAmount] = useState('')


	function handleChangeItem(event) {
		// const input = event.target.value;
		// const name = event.target.name
		// const copy = Object.assign({}, expense)
		// copy[name] = input
		// setExpense(copy)
		// console.log(expense)

		const input = event.target.value;
		setExpenseName(input)
		console.log(expenseName)
	}

	function handleChangeAmount (event) {
		const input = event.target.value;
		setExpenseAmount(input)
		console.log(expenseAmount)
	}
	  
	function handleSubmit (event) {
      event.preventDefault();
	  fetch('http://localhost:4000/expense', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				detail: expenseName,
				amount: expenseAmount
			}),
		});

		// post('route for backend', {name: expenseName, amount: expenseAmount})

		console.log(expenseName)
	}

	

    return (
		<div>
			<p> {props.user.userName} </p>

				<input
					onChange={handleChangeItem}
					type='text'
					placeholder='enter an expense'
					value = {expenseName}
				/>
				<input
					onChange={handleChangeAmount}
					type='number'
					placeholder='enter the amount'
					value = {expenseAmount}
				/>
				<button onClick={handleSubmit} type="submit">Add Expense</button>
			
		</div>
	);											
}

export default Expense;
