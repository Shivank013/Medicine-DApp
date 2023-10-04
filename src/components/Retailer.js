import { useState,useContext,useEffect } from "react";
import { AppContext } from "../context/AppContext";
const {ethers} = require("ethers");

function Retailer(){

  const {getRetailerDetails,createRetailer,addRetailer} = useContext(AppContext);
  
  const [retailerName,setName] = useState('');
  const [retailerLocation,setLocation] = useState('');
  const [retailerReceivingDate,setDate] = useState('');

  const [medicineId,setId] = useState('');
  
  const [wait,setWait] = useState(true);
  const [newUser,setNewUser] = useState('');
  const [value,setValue] = useState({});
  const [send,setSend] = useState(false);
  const [call,setCall] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      const data = await getRetailerDetails(accounts[0]);
      console.log(data);
      if(data){
      setNewUser(false);
      setWait(false);
      }
      else{
      setNewUser(true);
      setWait(false);
      }
    };
    if(wait){
    fetchData();
    }
  },[]);

  useEffect(()=>{
    if(send){
    console.log(value);
    createRetailer(value);
    setSend(false);
    setNewUser(false);
    }
  },[send]);

  useEffect(()=>{
    if(call){
    console.log(medicineId);
    addRetailer(medicineId);
    setCall(false);
    setNewUser(false);
    setId('');
    }
  },[call]);



  const register = (e) => {

    e.preventDefault();

    setValue({
      retailerName,
      retailerLocation,
      retailerReceivingDate
    });

    setSend(true);
          
    console.log(value);

    setName('');
    setLocation('');
    setDate('');
  };

  const add = (e) => {
    e.preventDefault();
    setCall(true);

  }

    return (
        <div>
          { wait ? 
            (<div className="shadow-2xl border-1 rounded-sm font-bold text-xl w-[35%] py-16 flex flex-col mx-auto text-center my-auto mt-[20%] text-red-500 bg-white ">Connecting... to your Metamask Wallet</div>)
             : newUser ?
            (<form className=" bg-yellow-100 border-black flex flex-col mt-16 border font-mullish text-red-500 font-semibold rounded-lg shadow-inner justify-center p-5 px-7 gap-6 w-[45%] items-start mx-auto" onSubmit={register}>
            <h2 className=" font-bold text-2xl self-center underline p-2 text-blue-600" >Register your self as a Retailer</h2>
            <div>
            <label htmlFor="name">Retailer Name: </label>
            <input
            className=" text-black w-64 border-2 px-1 rounded-md font-medium"
            type="text"
            id="name"
            value={retailerName}
            onChange={(e) => setName(e.target.value)}
             />
            </div>
            <div>
            <label htmlFor="location">Retailer Loaction: </label>
            <input
            className=" text-black w-64 border-2 px-1 rounded-md font-medium"
            type="text"
            id="location"
            value={retailerLocation}
            onChange={(e) => setLocation(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="date">Date of receiving the stock: </label>
            <input
            className=" text-black w-40 font-medium border-2 px-1 rounded-md"
            type="date"
            id="date"
            value={retailerReceivingDate}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>
            <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" type="submit">Submit</button>
            </form>)
            :
            (<form className=" bg-yellow-100 border-black flex flex-col mt-16 border font-mullish text-red-500 font-semibold rounded-lg shadow-inner justify-center p-5 px-7 gap-6 w-[45%] items-start mx-auto" onSubmit={add}>
              <h2 className=" font-bold text-2xl self-center underline p-2 text-blue-600">Add all medicines for tracking (Retailer)</h2>
              <label htmlFor="medicineId">Copy the stockId's: </label>
              <textarea
              className=" text-black w-[80%] p-1 border-2 rounded-md font-medium"
              rows='3'
              id="medicineId"
              value={medicineId}
              onChange={(e) => setId(e.target.value)}
             />
            <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" type="submit">Add Tracking</button>
            </form>)
          }
        </div>
    )
}

export default Retailer;