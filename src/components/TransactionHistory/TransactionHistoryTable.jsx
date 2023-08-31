import PropTypes from 'prop-types';
import {TransactionHistoryItem} from './TransactionHistoryItem';


export const TransactionHistoryTable = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <TransactionHistoryItem item={item} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistoryTable.PropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
