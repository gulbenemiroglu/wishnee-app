// https://eth-ropsten.alchemyapi.io/v2/W1Z83Pcm-wlj1RH0H_mgWRx6ZkuhlQsd

require('@nomiclabs/hardhat-waffle');

module.exports={
  solidity:'0.8.0',
  networks:{
    ropsten:{
      url:'https://eth-ropsten.alchemyapi.io/v2/W1Z83Pcm-wlj1RH0H_mgWRx6ZkuhlQsd',
      accounts:['2d1101899bfee38206c00f0090d4f884d1574e9eadbcce5a125cfc8b52a4dba1']
    }
  }
}