
import ButtonFooter from "./ButtonFooter";
// import { useState } from "react"
import Expense from './Expense';



function CreateBudget(props) {
	// const [income, setIncome] = useState();

	const handleChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className='expense-box'>
			<h2>Budget</h2>
			<p className='userName'>User: {props.user.userName}</p>
			<Expense user={props.user} setUser={props.setUser} />
			<ButtonFooter />
		</div>
	);
}

  export default CreateBudget;
