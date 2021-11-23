import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import 'react-bootstrap';
import Header from './components/Header';
import Intro from './components/Intro';
import CreateBudget from './components/create/CreateBudget';



function App() {
  const [user, setUser] = useState({
		userName: '',
		expenses: [],
	});

  let name = ""
  if (user.userName){
     name = user.userName
  }
  return (
    <div>
      <Header />
      {name}
      <Routes>
        <Route path='/' element={<Intro user={user} setUser={setUser}/>} />
        <Route path='/create' element={<CreateBudget />}/>
      </Routes>
    </div>
  );
}

export default App;
