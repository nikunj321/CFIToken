const CartelFinance = artifacts.require("CartelFinance");

module.exports = function(deployer) {
  deployer.deploy(CartelFinance);
};
