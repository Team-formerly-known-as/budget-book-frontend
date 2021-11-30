import { Link, Navigate } from 'react-router-dom'
import { useState } from 'react'

function Intro(props) {
  const [userInput, setUserInput] = useState({
    userName: '',
    income: 0,
    remainder: 0,
    expenses: [],
  })

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    const copy = Object.assign({}, userInput)
    copy[name] = value

    setUserInput(copy)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://hidden-taiga-41169.herokuapp.com/user', {
      // fetch("https://localhost:3000/user", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInput),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          console.log(data.user)
          props.setUser(data.user)
        } else {
          alert(data.message)
        }
      })
      .catch((err) => console.log(err))
  }

  return props.user && props.user.userName ? (
		<Navigate to='/create' />
	) : (
		<div className='intro-box'>
			<h2 className='intro-header'>welcome to budgetbook</h2>
			<p className='intro-text'>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est
				feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare,
				fringilla dui posuere, aliquet nisi.{' '}
			</p>
			<p className='intro-input'> start budgeting! </p>
			<form className="formUser" onSubmit={handleSubmit}>
				<input
					className='userInput'
					onChange={handleChange}
					type='text'
					name='userName'
					value={userInput.userName}
					placeholder='enter username'
				/>

				<input
					className='userInput'
					onChange={handleChange}
					type='number'
					name='income'
					placeholder='enter income'
				/>

				<Link to='/create'>
					<button className='primaryButton' onClick={handleSubmit}>
						Create Budget
					</button>
				</Link>
			</form>
		</div>
	);
}

export default Intro
