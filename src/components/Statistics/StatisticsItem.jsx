import PropTypes from 'prop-types';
import { Label, Percentage } from './Statistics.styled';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
