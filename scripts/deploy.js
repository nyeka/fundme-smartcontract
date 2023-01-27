import { ethers } from "hardhat";

const main = async () => {
  const factory = await ethers.getContractFactory("fundMe");
  const fundMe = await factory.deploy({});
  await fundMe.deployed();
};
