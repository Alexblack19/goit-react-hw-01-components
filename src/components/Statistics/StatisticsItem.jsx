import PropTypes from 'prop-types';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </>
  );
};

StatisticsItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
