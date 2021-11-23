import { useState } from 'react';

function Expense() {
	const [expenseList, setExpenseList] = useState([])

	const handleInputSubmit = (event) => {
        const expense = event.target.value;
        setExpenseList([...expenseList], expense )
        event.target.value = ""
        console.log(expenseList)

	};

	return (
		<div>
			<form onSubmit={handleInputSubmit}>
				<input
					type='text'
					placeholder='enter an expense'
				/>
                <button  > Submit </button>
				<input
					type='number'
					placeholder='enter the amount'
				/>
			</form>
		</div>
	);
}

export default Expense;
