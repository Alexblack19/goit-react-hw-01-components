import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import user from '../data/user';
import friends from '../data/friends';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile item={user} />
      <FriendList items={friends} />
    </div>
  );
};
