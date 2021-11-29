import { useEffect } from "react";



function DropdownBar(props) {

    function MakeAPICall() {
        fetch("http://localhost:4000/user")
        .then(res => res.json())
        .then(data => props.setSelectUser(data.user))
    
    }
    // let test = ''

    // if(props.selectUser.length > 0) {
    //     console.log(props.selectUser)
    //     test = props.selectUser[0].userName

        
    // }
    useEffect(
        () => {
            MakeAPICall()
        },[props.user]
    )

    const handleUserChange = (e) => {
        console.log(e.target.value)
        let obj = JSON.parse(e.target.value)
        props.setUser(obj)
    }
    
    // console.log(props.user)

	return (
		<div className="Wrapper">
            <div className="title">

                <select onChange={handleUserChange}>
                    <option value="select user"> -- Select User --</option>
                    {props.selectUser.map((user) => <option key={user._id} value={JSON.stringify(user)}>{user.userName}</option>)}
                </select>

            </div>
		</div>
	);
}

export default DropdownBar;