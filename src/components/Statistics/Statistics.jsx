import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { Section, Container, Title, StatList, Li } from './Statistics.styled';

export const Statistics = ({ title, items }) => {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}
        <StatList>
          {items.map(item => (
            <Li key={item.id} style={{ backgroundColor: getRandomHexColor() }}>
              <StatisticsItem item={item} />
            </Li>
          ))}
        </StatList>
      </Container>
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
