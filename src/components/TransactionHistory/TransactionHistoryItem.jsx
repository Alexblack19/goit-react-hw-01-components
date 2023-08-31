// import PropTypes from 'prop-types';

export const TransactionHistoryItem = ({
  item: { type, amount, currency },
}) => {
  return (
    <>
      <td>{type}</td>
      <td>125</td>
      <td>USD</td>
    </>
  );
};
