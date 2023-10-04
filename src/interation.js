// 0x7399c2C4fFDD9AeC65cA0ABA2f91D28d69281c0F

const {ethers} = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://sepolia.infura.io/v3/98b4cb39a36247b4988d43a182c9e3e7`);
const medicineAddress = "0x7399c2C4fFDD9AeC65cA0ABA2f91D28d69281c0F";
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

  const getinfo=async()=>{
    const contract = new ethers.Contract(medicineAddress,abi,provider);
    const data = await contract.getManufactureDetails();
    console.log(data);
  };
  getinfo();