import Expense from './Expense'

function CreateBudget(props) {

  return (
    <div className="expense-box">
		<h1 className="expenseAdd"> my budget </h1>
      <Expense user={props.user} setUser={props.setUser} />
    </div>
  )
}

export default CreateBudget
