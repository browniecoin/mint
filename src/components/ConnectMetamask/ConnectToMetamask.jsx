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
          BrownieCoins.org
        </h1>
        <hr className="my-4" />
        Deployer: 0x34E92b91CB1d166DEC6bFCBaf1A4B4B99f63709f
        <hr className="my-4" />
        <p>
        Welcome to BrownieCoins, your one-stop financial ecosystem. We leverage blockchain technology to offer comprehensive financial technology services and consume banking-as-a-service solutions. Join us in shaping the future of finance with BrownieCoins.
        </p>
        <div className="two-column-layout">
          <div className="column">
            <p><img src="images/logo.png" width="100%" alt="Bnetly" /></p>
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
            </p>
          </div>
        </div>
        <hr className="my-4" />

      </div>

      <div className="container mt-5">
        BrownieCoins.com &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
