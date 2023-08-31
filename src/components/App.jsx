import { Profile } from './Profile/Profile';
import { StatisticsItem } from './Statistics/StatisticsItem';
import { FriendList } from './FriendList/FriendList';
import user from '../data/user';
import stats from '../data/data.json';
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
      <StatisticsItem title="Upload stats" items={stats} />
      <FriendList items={friends} />
    </div>
  );
};
