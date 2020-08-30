const ConvertLib = artifacts.require("ConvertLib");
const CryptoCartelToken = artifacts.require("CryptoCartelToken");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, CryptoCartelToken);
  deployer.deploy(CryptoCartelToken);
};
