import { createContext, useState } from "react";
const {ethers} = require("ethers");

export const AppContext = createContext();

export default function AppContextProvider ({children}) {

  // const [MedicineAddress,setMedicineAddress] = useState("0x7399c2C4fFDD9AeC65cA0ABA2f91D28d69281c0F");
   const [MedicineAddress,setMedicineAddress] = useState("");

  
  const abi =  [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_manufacturerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_manufacturerLoaction",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_batchId",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_medicineId",
          "type": "string"
        }
      ],
      "name": "addCustomer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_medicineId",
          "type": "string"
        }
      ],
      "name": "addRetailer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_medicineId",
          "type": "string"
        }
      ],
      "name": "addShopkeeper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_customerName",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_purchasingDate",
          "type": "uint256"
        }
      ],
      "name": "createCustomer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_id",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_dose",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_mnfDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_expDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_quantity",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "_temp",
          "type": "string[]"
        }
      ],
      "name": "createMedicine",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_retailerName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_retailerLocation",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_receivingDate",
          "type": "uint256"
        }
      ],
      "name": "createRetailer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_shopkeeperName",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_shopkeeperLoacation",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_receivingDate",
          "type": "uint256"
        }
      ],
      "name": "createShopkeeper",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "check",
          "type": "address"
        }
      ],
      "name": "getCustomerDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getManufactureDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "check",
          "type": "string"
        }
      ],
      "name": "getMedicineDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMeds",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "check",
          "type": "address"
        }
      ],
      "name": "getRetailerDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "check",
          "type": "address"
        }
      ],
      "name": "getShopkeeperDetails",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "check",
          "type": "string"
        }
      ],
      "name": "getStock",
      "outputs": [
        {
          "internalType": "string[]",
          "name": "",
          "type": "string[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "check",
          "type": "string"
        }
      ],
      "name": "getTrackingDetails",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

      async function createMedicine(values){
        console.log(values);
        const {id,name,dose,mnfDate,expDate,quantity,stock} = values;
        const newNmfDate = mnfDate.replaceAll('-','');
        const newExpDate = expDate.replaceAll('-','');
        console.log(newExpDate);
        try{
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          await contract.createMedicine(id,name,dose,newNmfDate,newExpDate,quantity,stock);
        } catch(error)
        {
          console.error("Install Metamask");
        }
      }

      async function createRetailer(values){
        console.log(values);
        const {retailerName,retailerLocation,retailerReceivingDate} = values;
        const newDate = retailerReceivingDate.replaceAll('-','');
        try{
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          await contract.createRetailer(retailerName,retailerLocation,newDate);
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function createShopkeeper(values){
        const {shopkeeperName,shopkeeperLocation,shopkeeperReceivingDate} = values;
        const newDate = shopkeeperReceivingDate.replaceAll('-','');
        try{
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          await contract.createShopkeeper(shopkeeperName,shopkeeperLocation,newDate);
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function createCustomer(values){
        const {customerName,purchasingDate} = values;
        const newDate = purchasingDate.replaceAll('-','');
        try{
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          await contract.createCustomer(customerName,newDate);
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function addRetailer(medicineId){
        try{
          const next = medicineId.split(/[\s,]+/);
          console.log(next);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          for(let i=0;i<next.length;i++)
          {
            await contract.addRetailer(next[i]);
          }
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function addShopkeeper(medicineId){
        try{
          const next = medicineId.split(/[\s,]+/);
          console.log(next);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          for(let i=0;i<next.length;i++)
          {
          await contract.addShopkeeper(next[i]);
          }
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function addCustomer(medicineId){
        try{
          const next = medicineId.split(/[\s,]+/);
          console.log(next);
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          await provider.send("eth_requestAccounts",[]);
          const signers = provider.getSigner();
          const contract = new ethers.Contract(MedicineAddress,abi,signers);
          for(let i=0;i<next.length;i++)
          {
            await contract.addCustomer(next[i]);
          }
        } catch(error){
          console.error("Install Metamask");
        }
      }

      async function getStock(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        const data = await contract.getStock(check);
        console.log(data);
        return data;
      }

      async function getMeds(){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        const data = await contract.getMeds();
        console.log(data);
        return data;
      }

      async function getMedicineDetails(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        try{
          const data = await contract.getMedicineDetails(check);
          console.log(data);
          return data;
        } catch(error){
          const data = false;
          return data;
        } 
      }

      async function getManufactureDetails(){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        const data = await contract.getManufactureDetails();

        console.log(data);
        return (data);
      }

      async function getRetailerDetails(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        try{
          const data = await contract.getRetailerDetails(check);
          console.log(data);
          return data;
        } catch(error)
        {
          const data = false;
          return data;
        }
      }
      
      async function getShopkeeperDetails(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        try{
          const data = await contract.getShopkeeperDetails(check);
          console.log(data);
          return data;
        } catch(error)
        {
          const data = false;
          return data;
        }
      }

      async function getCustomerDetails(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        try{
          const data = await contract.getCustomerDetails(check);
          console.log(data);
          return data;
        } catch(error)
        {
          const data = false;
          return data;
        }
      }

      async function getTrackingDetails(check){
        const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
        const contract = new ethers.Contract(MedicineAddress,abi,provider);
        try{
          const data = await contract.getTrackingDetails(check);
          console.log(data);
          return data;
        } catch(error)
        {
          const data = false;
          return data;
        }
      }

    const value = {
      MedicineAddress,
      setMedicineAddress,
      getMeds,
      getStock,
      getMedicineDetails,
      addCustomer,
      addShopkeeper,
      addRetailer,
      createMedicine,
      getTrackingDetails,
      getCustomerDetails,
      getShopkeeperDetails,
      getRetailerDetails,
      getManufactureDetails,
      createCustomer,
      createShopkeeper,
      createRetailer
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>;
}