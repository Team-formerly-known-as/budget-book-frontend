import { useState, useEffect } from 'react'

function Expense(props) {
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  const [expenseId, setExpenseId] = useState(0)
  const [isClicked, setIsClicked] = useState(false)



  function handleChangeItem(event) {
    const input = event.target.value
    setExpenseName(input)
  }

  function handleChangeAmount(event) {
    const input = event.target.value
    setExpenseAmount(input)
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch(
      `https://hidden-taiga-41169.herokuapp.com/expense/${props.user._id}`,
    // fetch(
			// `https://localhost:3000/expense/${props.user._id}`,

			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					detail: expenseName,
					amount: expenseAmount,
					user: props.user._id,
				}),
			}
		)
			.then((res) => res.json())
			.then((user) => props.setUser(user))
			.then((user) => {
				setExpenseName('');
				setExpenseAmount('');
			});
  }

  function handleDelete(deletedId) {
    fetch(
      `https://hidden-taiga-41169.herokuapp.com/expense/${deletedId}/${props.user._id}`,
    // fetch(`https://localhost4000/expense/${deletedId}/${props.user._id}`,

      {
        method: 'DELETE',
      },
    )
      .then((res) => res.json())
      .then((data) => props.setUser(data.user))
  }

  // sets the states of the item info to be updated
  function setUpdate(id) {
    setExpenseName(id.detail)
    setExpenseAmount(id.amount)
    setExpenseId(id._id)
  }

  function handleUpdate() {
    fetch(
      `https://hidden-taiga-41169.herokuapp.com/user/${expenseId}/${props.user._id}`,
    // fetch(`https://localhost4000/user/${expenseId}/${props.user._id}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          detail: expenseName,
          amount: expenseAmount,
        }),
      },
    )
      .then((res) => res.json())
      .then((data) => props.setUser(data.user))
  }

  let expenseHtml = props.user.expenses.map((lineItem) => {
    return (
      <div className="itemBubble">
        <p className="itemExpense" key={lineItem._id}>
          <span className="list-item">{lineItem.detail}</span>{' '}
          <span className="list-amount">${lineItem.amount}</span>
        </p>
        <button
          className="secondaryButton"
          onClick={() => {
            setUpdate(lineItem) 
            setIsClicked(true)
          }}
        >
          Edit
        </button>
        <button
          className="secondaryButton"
          onClick={() => {
            handleDelete(lineItem._id)
          }}
        >
          Delete
        </button>
      </div>
    )
  })

  console.log(props.user)

  return (
		<div className='expense-container'>
			<div className='userInfo'>
				<p className='userName'>
					<span className='firstWord'> User </span>
					<span className='secondWord'>{props.user.userName}</span>
				</p>
				<p className='income'>
					<span className='firstWord'> Income </span>
					<span className='secondWord'>${props.user.income}</span>
				</p>
				<p className='balRemainder'>
					<span className='firstWord'> Balance </span>
					<span className='secondWord'>${props.user.remainder}</span>
				</p>
			</div>
			<div className='expense-input-box'>
				<h2 className='expenseAdd'>add expense</h2>
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
			{isClicked && (
				<div id='edit-field'>
					<h2 className='editTab'>Edit</h2>
					<input value={expenseName} type='text' onChange={handleChangeItem} />
					<input
						value={expenseAmount}
						type='number'
						onChange={handleChangeAmount}
					/>
					<button
						className='primaryButton'
						onClick={() => {
							handleUpdate();
							setIsClicked(false);
						}}
						type='submit'>
						Submit
					</button>
				</div>
			)}
			<div className='expense-list-box'>
				<p className='expense-list'>{expenseHtml}</p>
			</div>
		</div>
	);
}

export default Expense
