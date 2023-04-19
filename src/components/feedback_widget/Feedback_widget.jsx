import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Buttons } from './components/Buttons';
import { ListAndValue } from './components/ListAndValue';
import { CONTENT_DIV, TITLE_H1, STATISTICS_DIV } from './Feedback.styled';

export function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodResponse = () => {
    setGood(good + 1);
  };
  const neutralResponse = () => {
    setNeutral(neutral + 1);
  };
  const badResponse = () => {
    setBad(bad + 1);
  };
  const summaResponse = () => {
    return good + neutral + bad;
  };

  const percentage = () => {
    let summa = good + neutral + bad;
    let goodRating = good * 100;
    let normalRating = neutral * 50;
    let badRating = bad * 0;

    let percent = (goodRating + normalRating + badRating) / summa;
    return percent.toFixed(1);
  };
  return (
    <CONTENT_DIV>
      <TITLE_H1>Please leave feeedback</TITLE_H1>
      <Buttons
        good={goodResponse}
        neutral={neutralResponse}
        bad={badResponse}
      />
      <STATISTICS_DIV>
        <h2>
          Statistics
          {summaResponse() !== 0 && (
            <>
              <span>:</span>
            </>
          )}
        </h2>
        {summaResponse() !== 0 && (
          <ListAndValue
            good={good}
            neutral={neutral}
            bad={bad}
            summa={summaResponse()}
            percentage={percentage()}
          />
        )}
      </STATISTICS_DIV>
    </CONTENT_DIV>
  );
}

Feedback.propTypes = {
  Buttons: PropTypes.func,
  ListAndValue: PropTypes.func,
};
