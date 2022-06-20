// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Counter {
  uint counts;

  constructor(){
    counts = 0;
  }

  function add() public{
    counts += 1;
  }

  function getCounts() public view returns (uint) {
    return counts;
  }
}