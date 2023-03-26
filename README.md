# BlockVote

## Blockchain-based E-voting system with a crowdfunding and face-matching system

This is a decentralized blockchain-based voting system with crowdfunding built on Ethereum smart contracts. The system uses web3.js for verifying the KYC of the user using face matching. All the photos and documents are stored on IPFS, and Twilio is used to send confirmation messages.

## Overview of the App

- The app is a secure and transparent way of conducting elections.
- Ethereum smart contracts are used for vote counting and verification.
- This app has mainly two sides one is admin side one is normal voter side.
- The system ensures that only registered users can cast their votes.
- Each user can cast only one vote to prevent fraud.
- Each user can donate to the candidate of their choice.
- KYC verification is done using face matching to ensure that only eligible users can participate in the elections.
- All the photos and documents related to KYC verification are stored on IPFS to ensure that they cannot be tampered with.
- Twilio is used to send confirmation messages to the users after they cast their votes, adding an additional layer of security.

## Tech Stack

The tech stack used in the decentralized blockchain-based voting system is as follows:

- Ethereum: Ethereum is used to build the smart contracts that handle the vote counting and verification.
- Web3.js: Web3.js is used to interact with the smart contracts from the front-end application.
- React: React is used to build the front-end application.
- IPFS: IPFS is used to store the photos and documents related to KYC verification.
- Twilio: Twilio is used to send confirmation messages to the users after they cast their votes.
- Face Matching API: Face Matching API is used for KYC verification.
- Truffle: Truffle is used to compile and deploy the smart contracts to the local blockchain network.
- Ganache: Ganache is used as the local blockchain network for testing the smart contracts.

## Model Deployment

1. Clone the repository.

<pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class="">bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git clone https://github.com/sukhendu2002/decentralizedVotingUsingBlockchain.git
</code></div></div></pre>

2. Install the dependencies.

```
npm install
cd server
npm install
npm start

// open a new terminal

cd client
npm install
npm start

```

3. Start the local blockchain network using Ganache or any other Ethereum-compatible blockchain.
4. Compile and deploy the smart contract to the local blockchain network.

```
truffle migrate --reset
cd server
npm start
```

open a new terminal

```
cd client
npm start
```

## Demo Screenshots

#### Landing Page

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/cover.png)

#### Add a new candidate

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/can.png)

#### Initialize Voting

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/Screenshot%202023-03-26%20014527.png)

#### Voter Registration page

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/reg.png)

### Crowd Funding Page

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/Screenshot%202023-03-26%20020002.png)

#### Verification page from the Admin side

![](https://user-images.githubusercontent.com/76804228/221397507-1ef7944a-259f-45f6-8b99-06da9fe81405.png)

#### Voting page

![](https://raw.githubusercontent.com/Sukhendu2002/BlockVote/main/image/README/Screenshot%202023-03-26%20015745.png)

#### Result Page

![](https://user-images.githubusercontent.com/76804228/221397514-2d5b503a-7988-4096-879f-7ccb11667b69.png)

## Conclusion

The decentralized blockchain-based voting system with crowdfunding is a secure and transparent way of conducting elections. The system ensures that only eligible users can participate in the elections and that each user can cast only one vote. The use of face matching for KYC verification and IPFS for storing photos and documents ensures that the system is secure and tamper-proof. The integration of Twilio for sending confirmation messages adds an additional layer of security. The system can be used for conducting elections at various levels, including local, national, and international.
