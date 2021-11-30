import './App.css'
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import 'react-bootstrap'
import Header from './components/NavBar/Header'
import Intro from './components/Intro'
import CreateBudget from './components/create/CreateBudget'
import Team from './components/Team'

function App() {
  const [selectUser, setSelectUser] = useState([])

  const [user, setUser] = useState({
    userName: '',
    expenses: [],
  })

  return (
    <div>
      <Header
        selectUser={selectUser}
        setSelectUser={setSelectUser}
        user={user}
        setUser={setUser}
      />
      <Routes>
        <Route path="/" element={<Intro user={user} setUser={setUser} />} />
        <Route
          path="/create"
          element={<CreateBudget user={user} setUser={setUser} />}
        />
        <Route 
          path='/team'
          element={<Team/>}
        />
      </Routes>
    </div>
  )
}

export default App
