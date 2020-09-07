var HDWalletProvider = require("truffle-hdwallet-provider");
var fs = require('fs');

//Load sercrets.json to read mnumonic private key from JSON key-value pair
var rawdata = fs.readFileSync('secrets.json');
var secrets = JSON.parse(rawdata);

module.exports = {
  compilers: {
    solc: {
      version: "0.6.9",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(secrets.mnemonic, "https://ropsten.infura.io/v3/"+secrets.infuraApiKey);
      },
      gas: 2014918, //gas value sent?
      network_id: '3',
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(secrets.mnemonic, "https://kovan.infura.io/v3/"+secrets.infuraApiKey, 0); //3rd argument, index of account in mnemonic
      },
      network_id: '42',
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(secrets.mnemonic, "https://rinkeby.infura.io/v3/"+secrets.infuraApiKey);
      },
      network_id: '4',
    }
  }
};
