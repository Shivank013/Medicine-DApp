import { AppContext } from "../../context/AppContext";
import { useState,useContext, useEffect } from "react";
import Loading from "../Loading";

 function Stock(){

  const{getStock,getMeds} = useContext(AppContext);

  const [meds,setMeds] = useState([]);
  const [data,setdata] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const data = await getMeds();
      setMeds(data);
    };

    fetchData();
  },[]);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const data = await getStock(inputValue);
      setdata(data);
    };
    fetchData();
  },[showResult]);

  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index}>{item}<span>&nbsp;</span></div>
    ));
  };

  const handleClick = () => {
    if (inputValue.trim() === '') {
      setErrorMessage('Pleast enter the medicine Id');
      setShowResult(false);
    }
    else if(!meds.includes(inputValue))
    {
       setErrorMessage('Enter a valid medicine Id');
       setShowResult(false);
    }
    else 
    {
       setShowResult(true);
       setErrorMessage('');
    } 
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
          placeholder="Medicine Id"
        />
        <br/>
        <button className=" text-white font-bold self-center border-2 px-4 py-1 bg-red-500 rounded-md hover:bg-red-600" onClick={handleClick}>Submit</button>
        {errorMessage && <div>{errorMessage}</div>}
        {showResult &&  
        <div>
         {data[data.length - 1] ?
        (<div className=" flex flex-row ">{renderItems()}</div>)
         : (<span className=" self-center">Loading{<Loading/>}</span>)  
        }
        </div>}
      </div>
    );
}

export default Stock;