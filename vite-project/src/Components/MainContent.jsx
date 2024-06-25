import React from 'react';
import Button from './Button';
import discordCharacters from '../assets/discord-background.png';
import '../App.css'; // Import the CSS file here

function MainContent() {
  return (
    <main className="main-content">
      <h1>IMAGINE A PLACE...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide art community.
        Where just you and a handful of friends can spend time together. A place that makes it
        easy to talk every day and hang out more often.
      </p>
      <div className="buttons">
        <div>
          <Button text="Download for Mac" isPrimary />
        </div>
        <div>
          <Button text="Open Discord in your browser" />
        </div>
      </div>
      <img src={discordCharacters} alt="Discord Characters" className="discord-characters" />
    </main>
  );
}

export default MainContent;
