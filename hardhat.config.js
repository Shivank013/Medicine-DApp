/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-ethers")

const PRIVATE_KEY = "15b3c0cd3ac484b776c2b1c628c497c8d1d8080cad4e808de9600a750a57df6a";
const MYGANACHE_PRIVATE_KEY = "0xe5607273ced5f2e2f29f205303a51d1b3d4755986dff4be5e7e1f63ac7946aaf";
module.exports = {
  solidity: "0.8.18",

  networks: {
    ganache:{
      url:`HTTP://127.0.0.1:7545`,
      accounts:[`${MYGANACHE_PRIVATE_KEY}`]
    },
    sepolia:{
      url:`https://eth-sepolia.g.alchemy.com/v2/5s0ffS9dEInAo3FdTkQoFkeMizuzDD0E`,
      accounts:[`${PRIVATE_KEY}`]
    }
  }
};

//npx hardhat run --network sepolia scripts/deploy.js

