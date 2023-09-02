import PropTypes from 'prop-types';
import { Status } from './FriendList.styled';


export const FriendItem = ({ item: { isOnline, avatar, name } }) => {   
  return (
    <>
      <Status pr={isOnline}></Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
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
