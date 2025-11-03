import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComp from './Components/ListEmployeeComp';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { FootComp, HeaderComp } from './Components/FooterComp';
import { HeadComp } from './Components/HeaderComp';
import CreateEmpComp from './Components/CreateEmpComp';
import UpdateEmployeeComp from './Components/UpdateEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeadComp></HeadComp>
      <Routes>
        <Route path='/' element={<ListEmployeeComp></ListEmployeeComp>}></Route>
        <Route path='/employees' element={<ListEmployeeComp/>}></Route>
        <Route path='/add-employee' element={<CreateEmpComp/>}></Route>
        <Route path='/edit-employee/:id' element={<UpdateEmployeeComp/>}></Route>
      </Routes>
      <FootComp></FootComp>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
