
async function main(){
    const [deployer] = await ethers.getSigners();
    const Medicine = await ethers.getContractFactory("MedicineSupplyChain");
    const medicine = await Medicine.deploy("Conpanyxyz","Kanpur","Batch1");
    console.log("Medicine address : ", medicine.address);
}

main()
.then(()=>process.exit(0))
.catch((error)=>{
    console.error(error);
    process.exit(1);
});