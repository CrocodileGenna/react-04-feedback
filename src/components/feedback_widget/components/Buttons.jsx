import PropTypes from 'prop-types';
import { CONTAINER_DIV, BUTTON } from './styled/Buttons.styled';

export function Buttons({ good, neutral, bad }) {
  return (
    <CONTAINER_DIV>
      <BUTTON onClick={good}>Good</BUTTON>
      <BUTTON onClick={neutral}>Nautral</BUTTON>
      <BUTTON onClick={bad}>Bad</BUTTON>
    </CONTAINER_DIV>
  );
}

Buttons.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};
