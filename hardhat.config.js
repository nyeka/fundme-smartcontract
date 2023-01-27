require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: "https://eth-goerli.g.alchemy.com/v2/lNtC3Jv445JhH4OoCDqGN3khVA-oHo88",
      accounts: [
        "d9552f08843c47863ac6671c3061ab4c9ce41931dc3a1703c4b1ae51cf19273f",
      ],
      chainId: 5,
    },
  },
  etherscan: {
    apiKey: "JYYI924BF5RJ38PVXRPWUQ1QME3KAJUW6H",
  },
};
