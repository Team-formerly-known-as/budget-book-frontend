function CreateBudget() {
    return (
      <div>
        <form>
            <input type='number' placeholder='enter monthly income'/>
            <input type='text' placeholder='enter an expense'/>
            <input type='number' placeholder='enter the amount'/>
        </form>
      </div>
    );
  }
  
  export default CreateBudget;