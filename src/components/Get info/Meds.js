import { AppContext } from "../../context/AppContext";
import { useState,useContext, useEffect } from "react";
import Loading from "../Loading";

 function Meds(){

  const{getMeds} = useContext(AppContext);

  const [data,setdata] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const data = await getMeds();
      setdata(data);
    };

    fetchData();
  },[]);

  const renderItems = () => {
    return data.map((item, index) => (
      <div key={index}>{item}<span>&nbsp;</span></div>
    ));
  };
   
    return (
        <div className="bg-yellow-100 py-2 px-4 rounded-md border-black font-mullish text-md">
        {data[data.length - 1] ?
        (<div className=" flex flex-row">{renderItems()}</div>)
         : (<span className=" self-center">Loading{<Loading/>}</span>
           ) 
        }
        </div>
    );
}

export default Meds;