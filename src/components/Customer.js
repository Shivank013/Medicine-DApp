import { useState,useContext,useEffect } from "react";
import { AppContext } from "../context/AppContext";
const {ethers} = require("ethers");


function Customer(){

  const {getCustomerDetails,createCustomer,addCustomer} = useContext(AppContext);

  const [customerName,setName] = useState('');
  const [purchasingDate,setDate] = useState('');

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
      const data = await getCustomerDetails(accounts[0]);
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
    console.log("me useEffect tak pahuch gay");
    console.log(value);
    createCustomer(value);
    setSend(false);
    setNewUser(false);
    }
  },[send]);

  useEffect(()=>{
    if(call){
    console.log("me useEffect tak pahuch gay");
    console.log(medicineId);
    addCustomer(medicineId);
    setCall(false);
    setNewUser(false);
    setId('');
    }
  },[call]);



  const register = (e) => {

    e.preventDefault();

    setValue({
      customerName,
      purchasingDate
    });

    setSend(true);
          
    console.log(value);

    setName('');
    setDate('');
  };

  const add = (e) => {
    e.preventDefault();
    setCall(true);
  }

    return (
        <div>
          { wait ? 
            (<div className=" shadow-2xl border-1 rounded-sm font-bold text-xl w-[35%] py-16 flex flex-col mx-auto text-center my-auto mt-[20%] text-red-500 bg-white " >Connecting... to your Metamask Wallet</div>)
             : newUser ?
            (<form className=" bg-yellow-100 border-black flex flex-col mt-16 border font-mullish text-red-500 font-semibold rounded-lg shadow-inner justify-center p-5 px-7 gap-6 w-[45%] items-start mx-auto" onSubmit={register}>
            <h2 className=" font-bold text-2xl self-center underline p-2 text-blue-600" >Register your self as a Patient</h2>
            <div>
            <label htmlFor="name">Patient Name: </label>
            <input
            className=" w-64 text-black border-2 px-1 rounded-md font-medium"
            type="text"
            id="name"
            value={customerName}
            onChange={(e) => setName(e.target.value)}
             />
            </div>
            <div>
            <label htmlFor="date">Puschasing date of the medicine: </label>
            <input
            className=" w-40 text-black font-medium border-2 px-1 rounded-md"
            type="date"
            id="date"
            value={purchasingDate}
            onChange={(e) => setDate(e.target.value)}
            />
            </div>
            <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" type="submit">Submit</button>
            </form>)
            :
            (<form className=" bg-yellow-100 border-black flex flex-col mt-16 border font-mullish text-red-500 font-semibold rounded-lg shadow-inner justify-center p-5 px-7 gap-6 w-[45%] items-start mx-auto" onSubmit={add}>
              <h2 className=" font-bold text-2xl self-center underline p-2 text-blue-600">Add all medicines for tracking (Patient)</h2>
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

export default Customer;