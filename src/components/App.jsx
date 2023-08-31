import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user';
import stats from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile item={user} />
      <Statistics title="Upload stats" items={stats} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
