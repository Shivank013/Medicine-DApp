import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../images/medicine.png";

function Navbar(){

  const [isBold1, setIsBold1] = useState(true);
  const [isBold2, setIsBold2] = useState(false);
  const [isBold3, setIsBold3] = useState(false);
  const [isBold4, setIsBold4] = useState(false);
  const [isBold5, setIsBold5] = useState(false);
  const [isBold6, setIsBold6] = useState(false);

 
  const handleClick1 = () => {
    setIsBold2(false);
    setIsBold3(false);
    setIsBold4(false);
    setIsBold5(false);
    setIsBold6(false);
    setIsBold1(!isBold1);
  };
  const handleClick2 = () => {
    setIsBold1(false);
    setIsBold3(false);
    setIsBold4(false);
    setIsBold5(false);
    setIsBold6(false);
    setIsBold2(!isBold2);
  };
  const handleClick3 = () => {
    setIsBold1(false);
    setIsBold2(false);
    setIsBold4(false);
    setIsBold5(false);
    setIsBold6(false);
    setIsBold3(!isBold3);
  };
  const handleClick4 = () => {
    setIsBold1(false);
    setIsBold2(false);
    setIsBold3(false);
    setIsBold5(false);
    setIsBold6(false);
    setIsBold4(!isBold4);
  };
  const handleClick5 = () => {
    setIsBold1(false);
    setIsBold2(false);
    setIsBold3(false);
    setIsBold4(false);
    setIsBold6(false);
    setIsBold5(!isBold5);
  };
  const handleClick6 = () => {
    setIsBold1(false);
    setIsBold2(false);
    setIsBold3(false);
    setIsBold4(false);
    setIsBold5(false);
    setIsBold6(!isBold6);
  };


    return(
      <div className="flex flex-row justify-evenly">
        <div className=" flex p-4 font-mullish text-lg bg-gradient-to-tr from-blue-300 via-blue-500 to-blue-800 bg-blu w-full justify-center shadow-white text-white flex-row gap-6">
           <Link to={"/"}><img alt="" className=" h-8" src={img}/></Link>
           <Link to={"/"}><button className="" onClick={handleClick1} style={{ fontWeight: isBold1 ? 'bold' : 'normal' }}>Home</button></Link>
           <Link to={"/info"}><button onClick={handleClick2} style={{ fontWeight: isBold2 ? 'bold' : 'normal' }}>Info</button></Link>
           <Link to={"/manufacture"}><button onClick={handleClick3} style={{ fontWeight: isBold3 ? 'bold' : 'normal' }}>Manufacture</button></Link>
           <Link to={"/retailer"}><button onClick={handleClick4} style={{ fontWeight: isBold4 ? 'bold' : 'normal' }}>Retailer</button></Link>
           <Link to={"/shopkeeper"}><button onClick={handleClick5} style={{ fontWeight: isBold5 ? 'bold' : 'normal' }}>Pharmacy</button></Link>
           <Link to={"/customer"}><button onClick={handleClick6} style={{ fontWeight: isBold6 ? 'bold' : 'normal' }}>Patient</button></Link>
        </div>
      </div>
    );
}

export default Navbar;