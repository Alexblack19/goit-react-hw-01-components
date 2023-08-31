import PropTypes from 'prop-types';
import { Statistics } from './Statistics';

export const StatisticsItem = ({ title, items }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {items.map(item => (
          <li key={item.id} className="item">
            <Statistics item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
