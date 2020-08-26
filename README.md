This token is for the Crypto Cartel Discord.  
https://discord.gg/cryptocartel  
  
Todo:  
-Figure out how to do token ditribution. Maybe merkle airdrop.  
https://github.com/smartzplatform/constructor-eth-merkle-airdrop  
https://smartz.io/deploy/7619f96bbb137ac74b41c093/1  
  

or maybe https://github.com/bonedaddy/Postables-Payment-Channel/blob/develop/solidity/AirDropChannels.sol
  
  
-Deploy to a test network and test\
\
Setup\
1. npm install --save truffle-hdwallet-provider\
2. Install truffle

Local Setup:\
Install Ganache and setup environment at 127.0.0.1 port 7545\
truggle migrate\
truffle console\
\
Ropsten Testnet Setup:\
create secrets.json in this directory:\
{\
    "mnemonic":"YOUR MNEMONIC PRIVATE KEY HERE"\
    "infuraApiKey":"YOUR INFURA API KEY"\
}\
truffle migrate --network ropsten\
truffle console --network ropsten\