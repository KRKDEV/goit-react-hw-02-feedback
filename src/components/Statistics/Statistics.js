import css from './Statistics.module.css';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css['stats__list']}>
        <li>
          Good: <span>{good}</span>
        </li>
        <li>
          Neutral: <span>{neutral}</span>
        </li>
        <li>
          Bad: <span>{bad}</span>
        </li>
        <li>
          Total: <span>{total}</span>
        </li>
        <li>
          Positive feedback: <span>{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
