import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={css.item_good}>Good: {good}</p>
      <p className={css.item_neutral}>Neutral: {neutral}</p>
      <p className={css.item_bad}>Bad: {bad}</p>
      <p className={css.item_total}>Total: {total}</p>
      <p
        className={
          positivePercentage >= 66
            ? css.item_good
            : positivePercentage >= 33
            ? css.item_neutral
            : css.item_bad
        }
      >
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;
