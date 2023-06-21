import React, { useState } from 'react';
import './VotingComponent.css'; // Add your custom CSS for styling
import sepImage from './sep.jpg';
import kingImage from './king.jpeg';
import aryaImage from './arya.jpg';

const VotingComponent = () => {
  const [votes, setVotes] = useState({});

  const handleVote = (candidateId) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidateId]: (prevVotes[candidateId] || 0) + 1,
    }));
  };

  return (
    <div className="voting-container">
      <div className="candidate-card">
        <img src={sepImage} alt="Seftian Cahayana" className="candidate-image" />
        <h3>Seftian Cahayana</h3>
        <button onClick={() => handleVote(1)} className="vote-button">
          Vote
        </button>
        <p>Votes: {votes[1] || 0}</p>
      </div>
      <div className="candidate-card">
        <img src={kingImage} alt="Nathan Reyhands" className="candidate-image" />
        <h3>Nathan Reyhands</h3>
        <button onClick={() => handleVote(2)} className="vote-button">
          Vote
        </button>
        <p>Votes: {votes[2] || 0}</p>
      </div>
      <div className="candidate-card">
        <img src={aryaImage} alt="Arya Sabta" className="candidate-image" />
        <h3>Arya Sabta</h3>
        <button onClick={() => handleVote(3)} className="vote-button">
          Vote
        </button>
        <p>Votes: {votes[3] || 0}</p>
      </div>
    </div>
  );
};

export default VotingComponent;
