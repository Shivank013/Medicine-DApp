import { useState } from "react";
import ManufactureDetails from "./Get info/ManufactureDetails";
import Meds from "./Get info/Meds";
import Stock from "./Get info/Stock";
import MedicineDetails from "./Get info/MedicineDetails";
import TrackingDetails from "./Get info/TrackingDetails";
import CustomerDetails from "./Get info/CustomerDetails";
import ShopkeeperDetails from "./Get info/ShopkeeperDetails";
import RetailerDetails from "./Get info/RetailerDetails";
import { BsArrowUp,BsArrowDown } from "react-icons/bs";



function Info(){

  const [showManufactureDetails, setManufactureDetails] = useState(false);
  const [showMeds, setMeds] = useState(false);
  const [showStock, setStock] = useState(false);
  const [showMedicineDetails, setMedicineDetails] = useState(false);
  const [showTrackingDetails, setTrackingDetails] = useState(false);
  const [showCustomerDetails, setCustomerDetails] = useState(false);
  const [showShopkeeperDetails, setShopkeeperDetails] = useState(false);
  const [showRetailerDetails, setRetailerDetails] = useState(false);

  const handleClick1 = () => {
    setManufactureDetails(!showManufactureDetails);
  };
  const handleClick2 = () => {
    setMeds(!showMeds);
  };
  const handleClick3 = () => {
    setStock(!showStock);
  };
  const handleClick4 = () => {
    setMedicineDetails(!showMedicineDetails);
  };
  const handleClick5 = () => {
    setTrackingDetails(!showTrackingDetails);
  };
  const handleClick6 = () => {
    setCustomerDetails(!showCustomerDetails);
  };
  const handleClick7 = () => {
    setShopkeeperDetails(!showShopkeeperDetails);
  };
  const handleClick8 = () => {
    setRetailerDetails(!showRetailerDetails);
  };

    return (

       <div>
       <h2 className=" font-bold text-4xl self-center p-10 text-red-500 text-center">Get all the information here</h2>
       <div className=" w-full flex justify-evenly flex-row">

       <div className=" bg-white rounded-md w-[40%]">
       <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick1}>Get Manufacturer Details{showManufactureDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showManufactureDetails && <ManufactureDetails/>}
        </div>
       
        <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick2}>All medicines Id's{showMeds? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showMeds && <Meds/>}
        </div>
       
        <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick3}>All stock Id's of a Medicine{showStock? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showStock && <Stock/>}
        </div>
       
        <div className="pt-6 pb-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick4}>Get Medicine Details{showMedicineDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showMedicineDetails && <MedicineDetails/>}
        </div>
       </div>
       
       
       <div className=" bg-white rounded-md w-[40%]">
       <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick5}>Get tracking details of a medicine{showTrackingDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showTrackingDetails && <TrackingDetails/>}
        </div>
       
        <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick6}>Get Patient Details{showCustomerDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showCustomerDetails && <CustomerDetails/>}
        </div>
       
        <div className="pt-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick7}>Get Pharmacist Details{showShopkeeperDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showShopkeeperDetails && <ShopkeeperDetails/>}
        </div>
       
        <div className="pt-6 pb-6 px-4">
         <button className=" text-white flex flex-row justify-evenly gap-2 items-center font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={handleClick8}>Get Retailer Details{showRetailerDetails? (<BsArrowUp/>) : (<BsArrowDown/>)}</button>
         {showRetailerDetails && <RetailerDetails/>}
        </div>
       </div>
 
       </div>
       </div>   
    )
}

export default Info;