import PropTypes from 'prop-types';
import { TransactionHistoryItem } from './TransactionHistoryItem';
import { Section, Container, Table, Th, Tr} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Section>
      <Container>
        <Table>
          <thead>
            <tr>
              <Th>Type</Th>
              <Th>Amount</Th>
              <Th>Currency</Th>
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <Tr key={item.id}>
                <TransactionHistoryItem item={item} />
              </Tr>
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
