import './App.css';
import './Pretty/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import 'react-bootstrap';
import Header from './components/Header';
import Intro from './components/Intro';
import CreateBudget from './components/create/CreateBudget';


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Intro />}/>
        <Route path='/create' element={<CreateBudget />}/>
      </Routes>
    </div>
  );
}

export default App;
