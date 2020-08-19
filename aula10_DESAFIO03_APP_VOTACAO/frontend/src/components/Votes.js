import React from 'react';
import CountUp from 'react-countup';

export default function Votes(props) {
  return (
    <div>
      <CountUp
        start={props.previousVote || 0}
        end={props.value}
        duration={0.6}
        separator="."
        decimals={0}
        decimal=""
        prefix=""
        suffix=""
      >
        {({ countUpRef }) => (
          <div>
            <span ref={countUpRef} />
          </div>
        )}
      </CountUp>
    </div>
  );
}
