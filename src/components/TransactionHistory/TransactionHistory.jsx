import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Section, Container, Table } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Container>
        <Table class="transaction-history">
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
        </Table>
      </Container>
    </Section>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
