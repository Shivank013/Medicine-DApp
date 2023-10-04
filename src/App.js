import "./App.css";
import { Route,Routes } from "react-router-dom";
import Info from "./components/Info";
import Manufacture from "./components/Manufacture";
import Retailer from "./components/Retailer";
import Shopkeeper from "./components/Shopkeeper";
import Customer from "./components/Customer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import { useContext } from "react";
import GrabContract from "./components/GrabContract";

function App() {

    const {MedicineAddress} = useContext(AppContext);
  // useEffect(()=>{
  //   setMedicineAddress("0x6c3F61146656478a8836296f58C796D1486df249");
  // },[]);

  return (
    <div className=" min-h-screen">
    {MedicineAddress.length === 0 ?
    (<GrabContract/>)
    :
    (
    <div className="min-h-screen bg-image">
    <Navbar>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/manufacture" element={<Manufacture/>}/>
        <Route path="/retailer" element={<Retailer/>}/>
        <Route path="/shopkeeper" element={<Shopkeeper/>}/>
        <Route path="/Customer" element={<Customer/>}/>
      </Routes>
    </div>)
      }
    </div>
  );
}

export default App;
