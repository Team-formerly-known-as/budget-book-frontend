// import handleChange from "./CreateBudget"
import { useState } from "react";

function Expense(props) {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseId, setExpenseId] = useState(0);

  function handleChangeItem(event) {
    // const input = event.target.value;
    // const name = event.target.name
    // const copy = Object.assign({}, expense)
    // copy[name] = input
    // setExpense(copy)
    // console.log(expense)

    const input = event.target.value;
    setExpenseName(input);
  }

  function handleChangeAmount(event) {
    const input = event.target.value;
    setExpenseAmount(input);
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch(`http://localhost:4000/expense/${props.user._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        detail: expenseName,
        amount: expenseAmount,
        user:props.user._id
      }),
    })
      .then((res) => res.json())
		.then((user) => console.log(user));
        //router.put('/:expenseId/:userId'
        // post('route for backend', {name: expenseName, amount: expenseAmount})
      
  }

  return (
    <div>
      <p> {props.user.userName} </p>

      <input
        onChange={handleChangeItem}
        type="text"
        placeholder="enter an expense"
        value={expenseName}
      />
      <input
        onChange={handleChangeAmount}
        type="number"
        placeholder="enter the amount"
        value={expenseAmount}
      />
      <button onClick={handleSubmit} type="submit">
        Add Expense
      </button>
    </div>
  );
}

export default Expense;
