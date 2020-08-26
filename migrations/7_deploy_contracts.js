const ConvertLib = artifacts.require("ConvertLib");
const MetaCoin = artifacts.require("CryptoCartelToken");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, CryptoCartelToken);
  deployer.deploy(MetaCoin);
};
