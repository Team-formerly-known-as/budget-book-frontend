
import ButtonFooter from "./ButtonFooter";
// import { useState } from "react"
import Expense from './Expense';



function CreateBudget(props) {
	// const [income, setIncome] = useState();

	const handleChange = (e) => {
		console.log(e.target.value);
	};

	return (
		<div>
			<h1> $Income </h1>
			<Expense user={props.user} setUser={props.setUser} />
			<ButtonFooter />
		</div>
	);
}

  export default CreateBudget;
