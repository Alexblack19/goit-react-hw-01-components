import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { Section, Container, Li } from './FriendList.styled';

export const FriendList = ({ items }) => {
  return (
    <Section>
      <Container>
        {items.map(item => (
          <Li key={item.id} className="item">
            <FriendItem item={item} />
          </Li>
        ))}
      </Container>
    </Section>
  );
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
