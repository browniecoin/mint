import React, { useState } from "react";
import metamaskIcon from "./metamask.svg";
import Web3 from 'web3';
import { v4 as uuidv4 } from 'uuid'; // Import the v4 function from the uuid library
// import { Entity, Scene } from "aframe-react";
import "./styles.css";

const ConnectToMetamask = ({ connectToMetamask }) => {
  const [value, setValue] = useState('');



  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-5">
          Brownie Coin
        </h1>
        <hr className="my-4" />
        Deployer: BrownieCoin.eth
        <hr className="my-4" />
        Brownie Coin CA <a href="https://etherscan.io/token/0x0d2f8ee4194d79bbf4fee6c1f14ea5a0f5075b13" >0x0d2f8EE4194D79bBF4fee6c1f14ea5a0f5075b13</a>
        <hr className="my-4" />

        <p><img src="images/tax.gif" width="100%" alt="Tax" /></p>
<p>
Team and Advisors (15%): Allocated 15% of the total supply to the core team and advisors as a reward for their efforts and to align their interests with the project's success.
</p>
<p>
Ecosystem Development (25%): Allocated 25% of the total supply for ecosystem development. This fund can be used for partnerships, marketing, community incentives, and building integrations with other projects.
</p>
<p>
Community Rewards (20%): Reserved 20% of the total supply for community rewards and incentives. These tokens can be distributed to users who actively participate in the platform, such as creating content, sharing recipes, or referring new users.
</p>
<p>
Liquidity Pool (30%): Allocated 10% of the total supply to a liquidity pool on a decentralized exchange (DEX) like Uniswap. This provides liquidity for trading BRWN and ensures price stability.
</p>
<p>
Reserve Fund (10%): To address unforeseen circumstances or future expansion.
</p>
<p>
Brownie Coin has utility within the platform, allowing users to access premium features, vote on platform upgrades, and participate in governance decisions.
</p>

        <hr className="my-4" />
        <h3>Rewarding Good Deeds, The Sweet Way!</h3>
        <p><img src="images/home.gif" width="100%" alt="Brownie" /></p>
        <p>
          In a world where kindness, hard work, and going the extra mile deserve recognition beyond mere words, enter Brownie Coin!
          Brownie Coin is a delightful and innovative way to show your appreciation to those who make a difference, even in situations where traditional monetary rewards may not be culturally appropriate or necessary.
        </p>

        <h3>What We Offer</h3>
        <p>
            Introducing the Brownie Coin Leaderboard App – your go-to resource for staying ahead in the Brownie Coin market. This cutting-edge platform lets you search profiles by social media handles, providing real-time insights into their Brownie digital asset holdings. Dive into historical performance data and see how the leaders are shaping the market. With daily blockchain data updates, you'll always have the latest information at your fingertips. Plus, our leaderboard ranks profiles based on their Brownie asset holdings, offering a competitive edge and fostering community engagement. Don't miss out on the action – get in the game with the Brownie Coin Leaderboard App today!
            <hr className="my-4" />

            Proof of Work Blockchain: Our blockchain is secured by the tried-and-tested Proof of Work mechanism, ensuring robust security and decentralization.
            <hr className="my-4" />

            NFT Collection: Explore our unique NFT collection, featuring a blend of art and utility. Own exclusive digital assets that go beyond aesthetics and offer practical uses.
            <hr className="my-4" />

            ERC-20 Token: Fuel your journey with our native ERC-20 token. Use it for transactions, staking, or governance, and be part of the Brownie Coin ecosystem.
        </p>


        <div className="two-column-layout">
          <div className="column">
            <p><img src="images/logo.gif" width="100%" alt="Brownie Coin" /></p>
          </div>
          <div className="column">
            <p>

            <a href="https://github.com/browniecoin" >
              Github.com/browniecoin
            </a>
            <hr className="my-4" />
            <a href="https://x.com/browniecoins" >
              x.com/browniecoins
            </a>
            <hr className="my-4" />
            <a href="https://t.me/browniecoin" >
              t.me/browniecoin
            </a>
            <hr className="my-4" />
            <a href="/home/" >
              Sign-in
            </a>
            <hr className="my-4" />
            <button
              onClick={connectToMetamask}
              className="btn btn-primary d-flex align-items-center"
              style={{ fontSize: "0.9rem", letterSpacing: "0.14rem" }}
            >
              Connect Wallet
            </button>
            <hr className="my-4" />
            Connect your wallet or sign in to access a world of Brownie Coin Digital Asset excitement. Update your socials to showcase your unique assets, check out the leaderboards, explore the enchanting Browniewood, play thrilling games, and stay tuned for more surprises. Join us today and dive into the vibrant world of Brownie Coin!

            </p>
          </div>
        </div>
        <hr className="my-4" />

      </div>

      <div className="container mt-5">
        BrownieCoins.org &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
