const { ethers } = require("hardhat");

const main = async () => {
  const factory = await ethers.getContractFactory("fundMe");
  const fundMe = await factory.deploy({});
  await fundMe.deployed();
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
