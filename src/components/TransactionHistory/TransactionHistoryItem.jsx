import PropTypes from 'prop-types';
import { Td } from './TransactionHistory.styled';

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
};

TransactionHistoryItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
