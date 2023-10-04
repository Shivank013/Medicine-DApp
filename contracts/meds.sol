// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract MedicineSupplyChain {

   string manufacturerName;
   address manufacturerAddress;
   string manufacturerLoaction;
   string batchId;
   string[] meds;

   constructor(string memory _manufacturerName,string memory _manufacturerLoaction, string memory _batchId)
   {
     manufacturerName = _manufacturerName;
     manufacturerAddress = msg.sender;
     manufacturerLoaction = _manufacturerLoaction;
     batchId = _batchId;
   }


   // to check if the following already exists
   mapping(address => bool)checkRetailer;
   mapping(address => bool)checkShpokeeper;
   mapping(address => bool)checkCustomer;
   mapping(string => bool)chechMedicine;


   // struct for medicines in a single batch 
    struct medicine {
       string id;
       string name;
       uint256 dose;
       uint256 mnfDate;
       uint256 expDate;
       uint256 quantity;
       string[] stock;
   }

   mapping(string => medicine) private Medicine;
   uint256 medicineCount;

   // struct for retailer
   struct retailer{
       address retailerAddress;
       string retailerName;
       string retailerLocation;
       uint256 receivingDate;
   }
   mapping(address => retailer) private Retailer;

   // struct for shopkeeper
   struct shopkeeper{
       address shopkeeperAddress;
       string shopkeeperName;
       string shopkeeperLoacation;
       uint256 receivingDate;
   }
   mapping(address => shopkeeper) private Shopkeeper;

   // struct for customer
   struct customer{
       address customerAddress;
       string customerName;
       uint256 purchasingDate;
   }
   mapping(address => customer) private Customer;

   // struct for tracking a single medicine
   // this will going to be maped with the each medicine to keep the track of single medicine
   struct track{
       string medicineId;
       address manufacturerAddress;
       address retailerAddress;
       address shopkeeperAddress;
       address customerAddress;
   }
   mapping(string => track) private Track;

    // to get all stock ids
     function getStock(string memory check) public view returns (string[] memory) {
       return Medicine[check].stock;
    }

    // to get all Meds ids
     function getMeds() public view returns (string[] memory) {
       return meds;
    }


    // to get information about the medicne
     function getMedicineDetails(string memory check) public view returns(string memory,string memory,uint256,uint256,uint256,uint256,string[] memory){
       require(keccak256(abi.encodePacked(check))==keccak256(abi.encodePacked(Medicine[check].id)),"Not an aurthentic medicine");
       return(
        Medicine[check].id,
        Medicine[check].name,
        Medicine[check].dose,
        Medicine[check].mnfDate,
        Medicine[check].expDate,
        Medicine[check].quantity,
        Medicine[check].stock
       );
   }


    // to get inforation about the manufacturer
    function getManufactureDetails() public view returns(string memory,address,string memory,string memory){
       return(
           manufacturerName,
           manufacturerAddress,
           manufacturerLoaction,
           batchId
       );
   } 

   // to get information about the retailer
   function getRetailerDetails(address check) public view returns(address,string memory,string memory,uint256){
       require(check==Retailer[check].retailerAddress,"Not an aurthentic retailer");
       return(
        Retailer[check].retailerAddress,
        Retailer[check].retailerName,
        Retailer[check].retailerLocation,
        Retailer[check].receivingDate
       );
   }

   // to get information about the shopkeeper
   function getShopkeeperDetails(address check) public view returns(address,string memory,string memory,uint256){
       require(check==Shopkeeper[check].shopkeeperAddress,"Not an aurthentic Shopkeeper");
       return(
       Shopkeeper[check].shopkeeperAddress,
       Shopkeeper[check].shopkeeperName,
       Shopkeeper[check].shopkeeperLoacation,
       Shopkeeper[check].receivingDate
       );
   }

   // to get information about the customer
    function getCustomerDetails(address check) public view returns(address,string memory,uint256){
       require(check==Customer[check].customerAddress,"Not an aurthentic Customer");
       return(
       Customer[check].customerAddress,
       Customer[check].customerName,
       Customer[check].purchasingDate
       );
   }

   // to get information about the tracking of the medicine
   function getTrackingDetails(string memory check) public view returns(string memory,address,address,address,address){
        require(chechMedicine[check],"Not an aurthentic medicine id");
       return(
       Track[check].medicineId,
       Track[check].manufacturerAddress,
       Track[check].retailerAddress,
       Track[check].shopkeeperAddress,
       Track[check].customerAddress
       );
   }

   // create medicine
   function createMedicine(string memory _id,string memory _name,uint256 _dose,uint256 _mnfDate,uint256 _expDate,uint256 _quantity,string[] memory _temp)  public{
      medicine memory newMedicine = medicine(_id,_name,_dose,_mnfDate,_expDate,_quantity,_temp);
      Medicine[_id] = newMedicine;
      // a tracking structure will be created for a medicine at the time of its creation
       for(uint256 j=0 ;j<_quantity;j++)
       {
        track memory newTrack = track(_id,manufacturerAddress,address(0),address(0),address(0));
        Track[Medicine[_id].stock[j]] = newTrack;
        chechMedicine[Medicine[_id].stock[j]] = true;
       }
       meds.push(_id);
   }

   // create retailer
   function createRetailer(string memory _retailerName,string memory _retailerLocation,uint256 _receivingDate)  public{
      require(!checkRetailer[msg.sender],"Retailer already registered");
      retailer memory newRetailer = retailer(msg.sender,_retailerName,_retailerLocation,_receivingDate);
      Retailer[msg.sender] = newRetailer;
      checkRetailer[msg.sender] = true;
   }

   // create shopkeeper
   function createShopkeeper(string memory _shopkeeperName,string memory _shopkeeperLoacation,uint256 _receivingDate)  public{
      require(!checkShpokeeper[msg.sender],"Shopkeeper already registered"); 
      shopkeeper memory newShopkeeper = shopkeeper(msg.sender,_shopkeeperName,_shopkeeperLoacation,_receivingDate);
      Shopkeeper[msg.sender] = newShopkeeper;
      checkShpokeeper[msg.sender] = true;
   }
 
   // create customer
   function createCustomer(string memory _customerName,uint256 _purchasingDate)  public{
      require(!checkCustomer[msg.sender],"Customer already registered");
      customer memory newCustomer = customer(msg.sender,_customerName,_purchasingDate);
      Customer[msg.sender] = newCustomer;
      checkCustomer[msg.sender] = true;
   }
   
   // adding retailer address in tracking
   function addRetailer(string memory _medicineId) public {
       require(checkRetailer[msg.sender],"Not an authosized Retailer");
       Track[_medicineId].retailerAddress = msg.sender;
   }

   // adding Shopkeeper address in tracking
   function addShopkeeper(string memory _medicineId) public {
       require(checkShpokeeper[msg.sender],"Not an authosized Shopkeeper");
       Track[_medicineId].shopkeeperAddress = msg.sender;
   }

   // adding customer address in tracking
   function addCustomer(string memory _medicineId) public {
       require(checkCustomer[msg.sender],"Not an authosized Customer");
       Track[_medicineId].customerAddress = msg.sender;
   }
   
}