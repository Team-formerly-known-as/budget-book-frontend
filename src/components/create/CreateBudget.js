import ButtonFooter from "./ButtonFooter";
import { useState } from "react"
import Expense from './Expense';


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
                <Expense />
                <ButtonFooter />
            </form>
        </div>
    );
  }
  
  export default CreateBudget;