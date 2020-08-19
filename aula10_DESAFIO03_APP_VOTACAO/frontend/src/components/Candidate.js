import React from 'react';
import Position from './Position';
import Picture from './Picture';
import Info from './Info';
import Name from './Name';
import Votes from './Votes';
import Percentage from './Percentage';
import Popularity from './Popularity';
import css from './candidate.module.css';

export default function Candidate(props) {
  const { id, name, votes, percentage, popularity } = props.candidate;
  const imageSource = `${id}.png`;
  return (
    <div className={css.flexRow}>
      <Position>{props.position}</Position>
      <Picture imageSource={imageSource} description={name} />
      <Info>
        <Name>{name}</Name>
        <Votes value={votes} previousVote={props.previousVote}></Votes>
        <Percentage
          value={percentage}
          previousPercentage={props.previousPercentage}
        >
          {percentage}
        </Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  );
}
