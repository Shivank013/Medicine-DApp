import { AppContext } from "../../context/AppContext";
import { useState,useContext, useEffect } from "react";
import Loading from "../Loading";

 function ManufactureDetails(){

  const{getManufactureDetails} = useContext(AppContext);

  const [data,setdata] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 0));
      const data = await getManufactureDetails();
      setdata(data);
    };

    fetchData();
  },[]);
   
    return (
        <div className="bg-yellow-100 py-2 px-4 rounded-md border-black font-mullish text-md">
        {data[3] ? (<div>
        <p>Manufacture Name : {data[0]}</p>
        <p>Manufacture Address : {data[1]}</p>
        <p>Manufacture Location : {data[2]}</p>
        <p>Batch Id : {data[3]}</p>
        </div>
        ) : (
          <span className=" self-center">Loading{<Loading/>}</span>
        )}  
        </div>
    );
}

export default ManufactureDetails;