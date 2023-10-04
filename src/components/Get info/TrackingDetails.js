import { AppContext } from "../../context/AppContext";
import { useState,useContext, useEffect } from "react";
import Loading from "../Loading";

 function TrackingDetails(){

  const{getTrackingDetails} = useContext(AppContext);
  const [loading,setLoading] = useState(false);

  const [data,setdata] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      setLoading(true);
      const data = await getTrackingDetails(inputValue);
      setdata(data);
      console.log(data);
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
        <label htmlFor="inputField">Enter the Id of the medicine:</label>
        <input
          className=" text-black w-[80%] p-1 border-2 rounded-md font-medium"
          type="text"
          id="inputField"
          value={inputValue}
          required
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Stock Id"
        />
        <br/>
        <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-red-500 rounded-md hover:bg-red-600" onClick={handleClick}>Submit</button>
        {loading ?
         (<span className=" self-center">Loading{<Loading/>}</span>) : (<div></div>) 
        }
        { 
        !data ? (<div>Invalid medicine Id</div>) :
        !data[0]? (<div></div>) :
        (<div>
        <p>Medicine Id : {data[0]}</p>
        <p>Manufacture Address : {String(data[1])}</p>
        <p>Retailer Address : {String(data[2])}</p>
        <p>Pharmacist Address : {String(data[3])}</p>
        <p>Patient Address : {String(data[4])}</p>
        </div>) 
        }
      </div>
    );
}

export default TrackingDetails;

