import logo from './logo.svg';
import './App.css';
import Product from './ProductPages';
import Details from './Details';
import FF from './FF';
import Dash from './Dash';
import Test from './Test';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (


    <div className="App">
<BrowserRouter>
 
{/* <Dash/> */}

 <Routes>
 <Route path="/" element={<Product />} />
 <Route path="/Details/:Params" element={<Details />} />


 </Routes>

</BrowserRouter>

    </div>

  );  
}

export default App;


