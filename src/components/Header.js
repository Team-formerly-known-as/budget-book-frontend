import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className="headBackground">
      <Link className="headLink" to='/'>
        <h1 className="constHeader" >budgetbook</h1>
      </Link>
    </div>
  );
}

export default Header;