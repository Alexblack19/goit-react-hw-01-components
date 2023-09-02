import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { Section } from './Statistics.styled';

export const Statistics = ({ title, items }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {items.map(item => (
          <li
            key={item.id}
            className="item"
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <StatisticsItem item={item} />
          </li>
        ))}
      </ul>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
