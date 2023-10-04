import { AppContext } from "../../context/AppContext";
import { useState,useContext, useEffect } from "react";
import Loading from "../Loading";

 function ShopkeeperDetails(){

  const{getShopkeeperDetails} = useContext(AppContext);
  const [loading,setLoading] = useState(false);

  const [data,setdata] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);


  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      setLoading(true);
      const data = await getShopkeeperDetails(inputValue);
      console.log(data);
      setdata(data);
      setLoading(false);
    };
    if(showResult){
    fetchData();
    }
  },[showResult]);

  const handleClick = () => {
      setShowResult(true);
      setdata([]); 
  };
   
    return (
      <div className="bg-yellow-100 py-2 px-4 rounded-md border-black font-mullish text-md">
        <label htmlFor="inputField">Enter the Address of the Pharmacist:</label>
        <input
          className=" text-black w-[80%] p-1 border-2 rounded-md font-medium"
          type="text"
          id="inputField"
          value={inputValue}
          required
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Pharmacist Address"
        />
        <br/>
        <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-red-500 rounded-md hover:bg-red-600" onClick={handleClick}>Submit</button>
        {loading ?
         (<span className=" self-center">Loading{<Loading/>}</span>) : (<div></div>) 
        }
        { 
        !data ? (<div>Please enter aurthentic Pharmacist address</div>) :
        !data[0]? (<div></div>) :
        (<div>
          <p>Pharmacist Address : {String(data[0])}</p>
          <p>Pharmacist Name : {String(data[1])}</p>
          <p>Pharmacist Location : {String(data[2])}</p>
          <p>Receiving Date : {String(data[3]).substring(0,4)+'-'+String(data[3]).substring(4,6)+'-'+String(data[3]).substring(6)}</p>
        </div>) 
        }
      </div>
    );
}

export default ShopkeeperDetails;

