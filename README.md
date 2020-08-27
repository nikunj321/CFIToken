***This token is for the Crypto Cartel Discord.***  
https://discord.gg/cryptocartel  
  
**TODO:**  
*-Further testing on Ropsten test network.*  
  
*-Figure out how to do token airdrop cheaply.*  
This way looks like the cheapest way but would be challenging:  
https://github.com/bonedaddy/Postables-Payment-Channel/blob/develop/solidity/AirDropChannels.sol
or Merkle airdrop?  
https://github.com/smartzplatform/constructor-eth-merkle-airdrop  
https://smartz.io/deploy/7619f96bbb137ac74b41c093/1  
  
**Setup** (Haven't tried from scratch, lmk if not working) 
1. `npm install`  (install dependencies)  
2. `npm install -g truffle` (install truffle globally)  
3. Install VS Code and install *juanblanco.solidity* extension using solidity *version v0.6.9+commit.3e3065ac.js* https://ethereum.stackexchange.com/a/63102/28140  
     
**Local Setup:**  
1. Install Ganache (https://www.trufflesuite.com/ganache) and setup environment at 127.0.0.1 port 7545  
2. `truggle migrate`  (deploy contracts)
3. `truffle console`  (console to run commands. Try these commands with CryptoCartel insread of MetaCoin https://www.trufflesuite.com/docs/truffle/quickstart#interacting-with-the-contract)  
  
**Ropsten Testnet Setup:**  
1. Create secrets.json in this directory:  
{  
    "mnemonic":"YOUR MNEMONIC PRIVATE KEY HERE"  
    "infuraApiKey":"YOUR INFURA API KEY"  
}  
2. `truffle migrate --network ropsten`  
3. `truffle console --network ropsten`  
