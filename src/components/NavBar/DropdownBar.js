import { useEffect } from 'react'

function DropdownBar(props) {
  function MakeAPICall() {
    fetch('https://hidden-taiga-41169.herokuapp.com/user')
    // fetch("https://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => props.setSelectUser(data.user))
  }

  useEffect(() => {
    MakeAPICall()
  }, [props.user])

  const handleUserChange = (e) => {
    console.log(e.target.value)
    let obj = JSON.parse(e.target.value)
    props.setUser(obj)
  }

  return (
    <div className="Wrapper">
      <div className="title">
        <select onChange={handleUserChange}>
          <option value="select user"> -- Select User --</option>
          {props.selectUser.map((user) => (
            <option key={user._id} value={JSON.stringify(user)}>
              {user.userName}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DropdownBar
