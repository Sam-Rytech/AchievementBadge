// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AchievementBadge is ERC721, Ownable {
    uint256 public tokenIdCounter;
    string public baseURI;

    event BadgeMinted(address indexed to, uint256 tokenId);

    constructor(string memory baseURI_) ERC721("AchievementBadge", "ACHV") Ownable(msg.sender) {
        baseURI = baseURI_;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mintBadge(address to) external onlyOwner {
        tokenIdCounter++;
        _safeMint(to, tokenIdCounter);
        emit BadgeMinted(to, tokenIdCounter);
    }

    function setBaseURI() external onlyOwner {
        baseURI = "ipfs://bafybeidqqnfind5fgicd76gznpzkbhdvjdhrsxpi46kjzgorrihptkdutu/";
    }
}