import { Link } from "react-router-dom"


function Intro() {
    return (
      <div>
        <h2>Welcome to Budget Book</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed est feugiat sem dignissim faucibus a sed felis. Suspendisse a lacus ornare, fringilla dui posuere, aliquet nisi. Aliquam luctus justo porttitor, consectetur purus in, posuere nibh. Vivamus vel volutpat dui, a suscipit dui. Praesent malesuada maximus ipsum, eu faucibus dolor gravida ut. Nunc bibendum nulla vestibulum vulputate lobortis. Nulla facilisi. Morbi aliquam ex in eros facilisis blandit. Morbi hendrerit tempor pharetra.</p>

        <input type="text" placeholder="enter username" />
        <Link to="/create">
          <button>Create Budget</button>
        </Link>

      </div>
    );
  }
  
  export default Intro;