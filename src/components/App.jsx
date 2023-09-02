import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user';
import stats from '../data/data.json';
import friends from '../data/friends';
import transactions from '../data/transactions.json';

import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',       
        color: '#010101',
      }}
    >
      <GlobalStyle />
      <Profile item={user} />
      <Statistics title="Upload stats" items={stats} />
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
