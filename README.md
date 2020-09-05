***cartel.finance***  
***This is a community project for the traders at the Crypto Cartel Discord.***  
https://discord.gg/cryptocartel  
  
**Highlights**  
*-Standard ERC-20 token following best practices. Uses Solidity version 6.9. No burn, no rebase.*  
*-Initial supply of 50,000 tokens. 500 token airdrop to top 48 Crypto Cartel members (48,000).*  
*-Initial pool 3 ETH and 2% of token's supply. Initial market cap 150 ETH = $60,000 @ $400ETH*  
  
**TODO:**  
*-Further testing on Kovan test network.*  
*-Add airdrop function*
*-Estimate gas costs.*  

**Setup** 
1. `npm install`  (install dependencies)  
2. `npm install -g truffle` (install truffle globally)  
3. Install VS Code and install *juanblanco.solidity* extension using Solidity *version v0.6.9+commit.3e3065ac.js* https://ethereum.stackexchange.com/a/63102/28140  
     
**Local Setup:**  
1. Install Ganache (https://www.trufflesuite.com/ganache) and setup environment at 127.0.0.1 port 7545  
2. `truggle migrate`  (deploy contracts)
3. `truffle console`  (console to run commands. Try these commands using CryptoCartel instead of MetaCoin https://www.trufflesuite.com/docs/truffle/quickstart#interacting-with-the-contract)  
  
**Ropsten/Kovan Testnet Setup:**  
1. Create secrets.json in this directory:  
{  
    "mnemonic":"YOUR MNEMONIC PRIVATE KEY HERE"  
    "infuraApiKey":"YOUR INFURA API KEY"  
}  
2. `truffle migrate --network ropsten`  
3. `truffle console --network ropsten`  
  