import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Spinner from './components/Spinner';
import Candidates from './components/Candidates';

export default function App() {
  const [candidates, setCandidates] = useState([]);
  const [previousVotes, setPreviousVotes] = useState([]);
  const [previousPercentage, setPreviousPercentage] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          const localPreviousVotes = candidates.map(({ id, votes }) => {
            return { id, votes };
          });
          const localPreviousPercentage = candidates.map(
            ({ id, percentage }) => {
              return { id, percentage };
            }
          );
          setCandidates(json.candidates);
          setPreviousVotes(localPreviousVotes);
          setPreviousPercentage(localPreviousPercentage);
        });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [candidates]);

  if (candidates.length === 0) {
    return <Spinner description="Carregando..." />;
  }
  return (
    <div className="container">
      <Header>Votação</Header>
      <Candidates
        previousPercentage={previousPercentage}
        candidates={candidates}
        previousVotes={previousVotes}
      />
    </div>
  );
}
