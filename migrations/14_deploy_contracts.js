const CartelFinance = artifacts.require("CartelFinance");
const Migrations = artifacts.require("Migrations");

module.exports = function(deployer) {
  deployer.deploy(CartelFinance);
  deployer.deploy(Migrations);
};
