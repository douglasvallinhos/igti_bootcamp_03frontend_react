import React from 'react';
import Card from './Card';
import Candidate from './Candidate';
import FlipMove from 'react-flip-move';

export default function Candidates(props) {
  return (
    <div>
      <FlipMove>
        {props.candidates.map((candidate, index) => {
          const previousVoteObject = props.previousVotes.find(
            (item) => item.id === candidate.id
          );
          const previousVote = !!previousVoteObject
            ? previousVoteObject.votes
            : 0;

          const previousPercentageObject = props.previousPercentage.find(
            (item) => item.id === candidate.id
          );
          const previousPercentage = !!previousPercentageObject
            ? previousPercentageObject.percentage
            : 0;
          return (
            <div key={candidate.id}>
              <Card>
                <Candidate
                  candidate={candidate}
                  position={index + 1}
                  previousVote={previousVote}
                  previousPercentage={previousPercentage}
                />
              </Card>
            </div>
          );
        })}
      </FlipMove>
    </div>
  );
}
