import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistoryList } from './TransactionHistory/TransactionHistoryList';
import user from '../data/user';
import stats from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions.json';


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
      <StatisticsList title="Upload stats" items={stats} />
      <FriendList items={friends} />
      <TransactionHistoryList items={transactions} />
    </div>
  );
};
