import PropTypes from 'prop-types';

export function ListAndValue({ good, neutral, bad, summa, percentage }) {
  return (
    <>
      <ul>
        <li>
          Good:
          <span>{good}</span>
        </li>
        <li>
          Nautral:
          <span>{neutral}</span>
        </li>
        <li>
          Bad:
          <span>{bad}</span>
        </li>
      </ul>
      <p>{summa}</p>
      <p>Percentage of quality: {percentage}%</p>
    </>
  );
}

ListAndValue.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  summa: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};
