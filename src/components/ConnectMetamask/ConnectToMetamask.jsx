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
        <h1>Introducing Brownie Coins: Rewarding Good Deeds, The Sweet Way!</h1>
        <p>
          In a world where kindness, hard work, and going the extra mile deserve recognition beyond mere words, enter Brownie Coins!
          Brownie Coins is a delightful and innovative way to show your appreciation to those who make a difference, even in situations where traditional monetary rewards may not be culturally appropriate or necessary.
        </p>

        <div className="section">
          <h2>Why Brownie Coins?</h2>
          <ul>
            <li>
              <strong>Beyond Money:</strong> Brownie Coins offer a refreshing alternative to traditional monetary rewards. They are perfect for recognizing good deeds in settings where cash gifts are not suitable or culturally acceptable.
            </li>
            <li>
              <strong>Expressing Gratitude:</strong> Sometimes a simple "thank you" doesn't quite cut it when someone has gone above and beyond. Brownie Coins are a tangible token of your appreciation, demonstrating your heartfelt gratitude.
            </li>
            <li>
              <strong>Personal Touch:</strong> With Brownie Coins, you can customize your message and design, making them a unique and personal gift. Add a heartfelt note or an inside joke to make it even more special.
            </li>
            <li>
              <strong>Versatility:</strong> Brownie Coins are not limited to a specific occasion or sector. They can be used in various settings, from corporate environments to community projects, schools, and more.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>How It Works</h2>
          <ol>
            <li>
              <strong>Recognize Good Deeds:</strong> Whenever you encounter someone who deserves recognition for their exceptional efforts, simply acknowledge their achievements.
            </li>
            <li>
              <strong>Select a Brownie Coin:</strong> Choose from our wide range of Brownie Coins, each with its own design and message, to suit the occasion and the recipient.
            </li>
            <li>
              <strong>Personalize Your Message:</strong> Add a personal touch by including a heartfelt message on the coin. This turns a simple token into a cherished keepsake.
            </li>
            <li>
              <strong>Present Your Brownie Coin:</strong> Hand over the Brownie Coin to the deserving individual, expressing your appreciation and admiration for their hard work and dedication.
            </li>
            <li>
              <strong>Spread Positivity:</strong> Encourage others to join the movement of appreciation by sharing your Brownie Coins story on social media with the hashtag #BrownieCoins.
            </li>
          </ol>
        </div>
 
        <div className="section">
          <h2>Our Values</h2>
          <p>
            At Brownie Coins, we believe that small acts of kindness and extraordinary efforts deserve recognition. Our mission is to create a world where gratitude and appreciation are celebrated and shared. We're committed to promoting a culture of positivity and recognition.
          </p>
        </div>

        <div className="section">
          <h2>Start Spreading Sweet Appreciation Today!</h2>
          <p>
            Join us in recognizing the unsung heroes in your life, workplace, or community. Brownie Coins provide a meaningful and culturally sensitive way to say "thank you" to those who make a difference. It's time to celebrate the good deeds and create a ripple effect of positivity.
          </p>
          <button className="order-button">Order Your Brownie Coins</button>
        </div>

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
        BrownieCoins.org &copy; 2023 All rights reserved.
        <hr className="my-4" />
      </div>
    </div>
  );
};

export default ConnectToMetamask;
