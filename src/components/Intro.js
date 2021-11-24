import { Link } from "react-router-dom";
import { useState } from 'react';

function Intro(props) {
  const [userInput,setUserInput] = useState({
		userName: '',
    income: 0,
    expenses: [],
	});


    const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const copy = Object.assign({}, userInput);
      copy[name] = value;

      setUserInput(copy);
    }

  	const handleSubmit = (event) => {
      console.log(userInput.income)
			fetch('http://localhost:4000/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(userInput),
			}).then(res => res.json())
        .then(user =>{
        console.log(user.user)
        props.setUser(user.user)
      })
      
      // console.log(user)
		};


    return (
      <div className="intro-box" >
        <h2 className="intro-header" >welcome to budgetbook...</h2>
        <p className="intro-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare, fringilla dui posuere, aliquet nisi. </p>

        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} type="text" name="userName" value={userInput.userName} placeholder="enter username" />

        <input onChange={handleChange} type="number" name="income" placeholder="enter income" />

        <Link to="/create">


        <button onClick={handleSubmit} className="intro-button" >Create Budget</button>


        </Link>

        </form>

      </div>
    );
  }
  
  export default Intro;