# NFT Achievement Badge

This project is a Web3 dApp where the contract owner can mint unique achievement badges as NFTs to users. Each badge has a level (1 to 5), with metadata stored on IPFS.

## Features

- ERC721 NFT smart contract with level support
- Token metadata hosted on IPFS (via Pinata)
- Dynamic token URI based on badge level (e.g., `ipfs://<CID>/1.json`)
- Frontend built with Next.js, React, and Tailwind CSS
- Wallet connection and minting using Ethers.js

