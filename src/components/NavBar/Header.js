import DropdownBar from './DropdownBar';
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <div className="headBackground">
      <Link className="headLink" to='/'>
        <h1 className="constHeader" >budgetbook</h1>
      </Link>
      <DropdownBar selectUser={props.selectUser} setSelectUser={props.setSelectUser} user={props.user} setUser={props.setUser}/>
    </div>
  );
}

export default Header;