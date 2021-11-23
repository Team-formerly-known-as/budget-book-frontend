import { Link } from "react-router-dom";

function Intro() {
    return (
      <div className="intro-box" >
        <h2 className="intro-header" >welcome to budgetbook...</h2>
        <p className="intro-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare, fringilla dui posuere, aliquet nisi. </p>

        <input type="text" placeholder="enter username" />
        <Link to="/create">

        <button className="intro-button" >Create Budget</button>

        </Link>

      </div>
    );
  }
  
  export default Intro;