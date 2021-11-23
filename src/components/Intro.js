import { Link } from "react-router-dom";


function Intro(props) {


    const handleChange = (e) => {
      const value = e.target.value;
      const name = e.target.name;
      const copy = Object.assign({}, props.user);
      copy[name] = value;
      props.setUser(copy);
    }

  	const handleSubmit = (event) => {
      event.preventDefault()
			fetch('http://localhost:4000/user', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(props.user),
			})
      
      // console.log(user)
		};


    return (
      <div className="intro-box" >
        <h2 className="intro-header" >welcome to budgetbook...</h2>
        <p className="intro-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare, fringilla dui posuere, aliquet nisi. </p>

        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} type="text" name="userName" value={props.user.userName} placeholder="enter username" />

        <Link to="/create">

        <button onClick={handleSubmit} className="intro-button" >Create Budget</button>

        </Link>

        </form>

      </div>
    );
  }
  
  export default Intro;