import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  background-color: #e4eaf0;
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
`;

export const Table = styled.table`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  border-collapse: collapse;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  background-color: #ffffff;
`;

export const Th = styled.th`
  padding-top: 16px;
  padding-bottom: 16px;
  width: calc(100% / 3);
  text-transform: uppercase;
  &:nth-child(2) {
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
  }
  color: #ffffff;
  background-color: #00bcd5;
`;

export const Td = styled.td`
  padding: 12px 0;
  text-align: center;
  &:nth-child(3n + 2) {
    border-left: 1px solid #a1a3a5;
    border-right: 1px solid #a1a3a5;
  }
  color: #515151;
  border-radius: 20px;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #eaf2f4;
  }
`;
