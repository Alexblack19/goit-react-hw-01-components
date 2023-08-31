import PropTypes from 'prop-types';
import { Friend } from './Friend';

export function FriendList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} className="item">
          <Friend items={items} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
