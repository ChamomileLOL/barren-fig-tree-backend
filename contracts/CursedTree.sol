// CONCEPT: Smart Contracts & Solidity (FSD Electives)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CursedTree {
    // CONCEPT: State Variables (The Leaves)
    string public constant appearance = "Lush and Green";
    
    // CONCEPT: Address / Identity
    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    // CONCEPT: The Transaction (The Request for Fruit)
    // TRAP: This function will ALWAYS fail (revert).
    // It consumes your 'gas' (your effort) and gives nothing.
    function pluckFruit() public pure returns (string memory) {
        // The 10000 Billion Strict Equality Logic in Solidity:
        // Fruit does not exist.
        revert("May no fruit ever come from you again.");
    }

    // CONCEPT: View Functions
    function checkLeaves() public pure returns (string memory) {
        return appearance;
    }
}