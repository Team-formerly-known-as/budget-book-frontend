import ButtonFooter from "./ButtonFooter";
import { useState } from "react"


function CreateBudget() {

  const [income, setIncome] = useState()

  const handleChange = (e) => {
    console.log(e.target.value)
  }

    return (
			<div>
				<form>
					<input
						onChange={handleChange}
						type='number'
						placeholder='enter monthly income'
					/>
					<input
						onChange={handleChange}
						type='text'
						placeholder='enter an expense'
					/>
					<input
						onChange={handleChange}
						type='number'
						placeholder='enter the amount'
					/>
					<ButtonFooter />
				</form>
			</div>
		);
  }
  
  export default CreateBudget;