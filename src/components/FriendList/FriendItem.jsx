import PropTypes from 'prop-types';
import { Status, Avatar, Name } from './FriendList.styled';

export const FriendItem = ({ item: { isOnline, avatar, name } }) => {
  return (
    <>
      <Status status={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </>
  );
};

FriendItem.propTypes = {
  item: PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
