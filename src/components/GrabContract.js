import React, { useContext, useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import QRCode from 'qrcode';
import { AppContext } from '../context/AppContext';

const GrabContract = () => {
  const {setMedicineAddress} = useContext(AppContext);
  const [contractAddress,setContractAddress] = useState("");
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 3,
    });

    let isScanning = true;

    scanner.render(success, error);

    function success(result) {
      if (isScanning) {
        scanner.clear();
        setMedicineAddress(result);
        isScanning = false; // Set isScanning to false to stop further scanning
      }
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  const generateQrCode = async () => {
    try {
          const response = await QRCode.toDataURL(contractAddress);
          setImageUrl(response);
    }catch (error) {
      console.log(error);
    }
  }


  return (
    <div className=' min-h-screen bg-image-scaner flex flex-col justify-center items-center '>
    <h1 className=' font-mullish underline text-5xl font-semibold text-red-600 pb-8 mt-10'>Welcome to the Medicine-DApp</h1>
    <h1 className=' font-mullish text-4xl font-semibold text-blue-500 pb-20 mt-10'>To get started connect yourself to the blockchain</h1>
      <div className='flex flex-row justify-center items-center'>
          <div className=' w-[28rem] p-4 mx-6'>
            <input
            placeholder='Contract Address'
            className=" w-64 border-2 h-8 text-black px-1 rounded-md font-medium"
            type="text"
            id="contractAddress"
            value={contractAddress}
            onChange={(e) => setContractAddress(e.target.value)}
            />
            <button className=" text-white font-bold self-center border-2 ml-2 px-4 py-1 bg-blue-500 rounded-md hover:bg-blue-600" onClick={generateQrCode}>Generate Qr</button>
            <br/>
            <br/>
            {imageUrl ? (
             <a href={imageUrl} download>
                 <img src={imageUrl} alt="img"/>
             </a>) : null}
          </div>
          <div className=' bg-white w-[25rem] mx-6'>
          <div id="reader"></div>
          </div>
        </div>
    </div>
  );
}



export default GrabContract;
