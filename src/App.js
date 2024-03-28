import './App.css';
import Home from './Component/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Component/Create';
import Read from './Component/Read';
import Update from './Component/Update';



function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/create" element={<Create/>}></Route>
        <Route path="/read/:id" element={<Read/>}></Route>
        <Route path="/update/:id" element={<Update/>}></Route>
      </Routes>  
      </BrowserRouter> 
    
    </div>
  );
}

export default App;
