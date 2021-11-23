
// import handleChange from "./CreateBudget"
import { useState } from 'react'

function Expense() {
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
		event.preventDefault()
		// post('route for backend', {name: expenseName, amount: expenseAmount})

		console.log(expenseName)
	}

    return (
		<div>
			
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
