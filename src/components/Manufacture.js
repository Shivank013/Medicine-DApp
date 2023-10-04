import { useEffect, useState,useContext } from "react";
import { AppContext } from "../context/AppContext";
const {ethers} = require("ethers");

function Manufacture(){

  const [authentication,setAuthentication] = useState(false);
  const [errormsg,seterrormsg] = useState(false);
  const {getManufactureDetails,createMedicine} = useContext(AppContext);
  const [send,setSend] = useState(false);
  const [value,setValue] = useState({});

  useEffect(()=>{
    if(send){
    console.log(value);
    createMedicine(value);
    setSend(false);
    }
  },[send]);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const data = await getManufactureDetails();
      console.log(data);
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      console.log(accounts[0]);
      console.log(data[1]);
      if(data[1] == accounts[0]){
        seterrormsg(false);
        setAuthentication(true);
      }
      else{
        seterrormsg(true);
        setAuthentication(false);
      }
    };
    fetchData();
  },[]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [dose, setDose] = useState(0);
    const [mnfDate, setMnfDate] = useState('');
    const [expDate, setExpDate] = useState('');
    const [quantity, setQuantity] = useState(0);
    let stock = [];

    const generateStockIds = (prefix, n) => {
      for (let i = 0; i < n; i++) {
        const paddedNumber = String(i).padStart(3, '0');
        const id = `${prefix}${paddedNumber}`;
        stock.push(id);
      }
      console.log(stock);
    };
    
    const handleSubmit = (e) => {

      generateStockIds(id,quantity);

      e.preventDefault();

      setValue({
        id,
        name,
        dose,
        mnfDate,
        expDate,
        quantity,
        stock
      });

      setSend(true);
            
      console.log(value);

      setId('');
      setName('');
      setDose(0);
      setMnfDate('');
      setExpDate('');
      setQuantity(0);
      stock = [];
    };

    return (
        <div>
        {
          authentication && !errormsg ? 
          (<div>
            <form className=" bg-yellow-100 border-black flex flex-col mt-16 border font-mullish text-red-500 font-semibold rounded-lg shadow-inner justify-center p-5 px-7 gap-6 w-[45%] items-start mx-auto" onSubmit={handleSubmit}>
            <h2 className=" font-bold text-2xl self-center underline p-2 text-blue-600" >Add a new medicine to the batch</h2>
            <div>
            <label htmlFor="id">ID: </label>
            <input
            className=" w-64 border-2 text-black px-1 rounded-md font-medium"
            type="text"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="name">Name: </label>
            <input
            className=" w-64 border-2 text-black px-1 rounded-md font-medium"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="dose">Dose(in mg): </label>
            <input
            className=" w-64 border-2 text-black rounded-md px-1 font-medium"
            placeholder=" in mg"
            type="number"
            id="dose"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="mnfDate">Manufacturing Date: </label>
            <input
            className=" w-40 border-2 font-medium text-black px-1 rounded-md"
            type="date"
            id="mnfDate"
            value={mnfDate}
            onChange={(e) => setMnfDate(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="expDate">Expiry Date: </label>
            <input
            className=" w-40 border-2 font-medium text-black px-1 rounded-md"
            type="date"
            id="expDate"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
            />
            </div>
            <div>
            <label htmlFor="quantity">Quantity: </label>
            <input
            className=" w-64 border-2 text-black px-1 rounded-md font-medium"
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            />
            </div>
            <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" type="submit">Add</button>
            </form>
          </div>)
          : !authentication && !errormsg ? 
          (<div className=" bg-white shadow-2xl border-1 rounded-sm font-bold text-xl w-[35%] py-16 flex flex-col mx-auto text-center my-auto mt-[20%] text-red-500 ">Connecting... to your Metamask Wallet</div>)
          :
          (<div className=" bg-white shadow-2xl border-1 rounded-sm font-bold text-2xl w-[35%] py-16 flex flex-col mx-auto text-center my-auto mt-[20%] text-red-500 ">You are not Authorized for this</div>)
        }
        </div>
    );
}

export default Manufacture;