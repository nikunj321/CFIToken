***cartel.finance***  
  
**Highlights**  
*-Compliant ERC-20 token following best practices. Uses Solidity version 6.9. No burn or rebase.*  
*-Total supply of 50,000. 1000 token airdrop to 49 most dedicated DeFi Crypto Cartel members (49,000).*  
*-Initial uniswap pool 3 ETH and 2% (1000) of token's supply. Initial market cap 150 ETH = $60,000 @ $400ETH*  
*-Fully and evenly distributed airdrop. No ICO. No mint function. No lockup. No dev fund.*  
*-Contract address: 0x4FeA2109624A515968167d4015e54f70D28435eE*  
  
**To Do**  
-Build website  
-Add logo to Uniswap  
-Update etherscan.io details  
  
**Roadmap**  
-Bamboo Relay Exchange listing  
-Layer 2 Exchange listing  
-Farming/Staking  
-Bridge to Serum DEX or Binance Chain DEX   
  
**Setup:**  
1. `npm install`  (install dependencies)  
2. `npm install -g truffle` (install truffle globally)  
3. Install VS Code and install *juanblanco.solidity* extension using Solidity *version v0.6.9+commit.3e3065ac.js* https://ethereum.stackexchange.com/a/63102/28140  
     
**Local Setup:**  
1. Install Ganache (https://www.trufflesuite.com/ganache) and setup environment at 127.0.0.1 port 7545  
2. `truggle migrate`  (deploy contracts)
3. `truffle console`  (console to run commands. Try these commands using CryptoCartel instead of MetaCoin https://www.trufflesuite.com/docs/truffle/quickstart#interacting-with-the-contract)  
  
**Ropsten/Kovan/Live Testnet Setup:**  
1. Create secrets.json in this directory:  
```javascript
{  
    "mnemonic":"YOUR MNEMONIC PRIVATE KEY HERE"  
    "infuraApiKey":"YOUR INFURA API KEY"  
}  
```
2. `truffle migrate --network ropsten`  
3. `truffle console --network ropsten`  
  
