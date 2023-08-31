export const TransactionHistoryList = ({ items }) => {
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
            <td>Invoice</td>
            <td>125</td>
            <td>USD</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
