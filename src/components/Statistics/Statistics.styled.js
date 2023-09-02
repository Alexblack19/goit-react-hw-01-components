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

export const Title = styled.h2`
  padding-top: 24px;
  padding-bottom: 24px;
  text-align: center;
  text-transform: uppercase;
  color: #515151;
  background-color: #ffffff;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 5);
  align-items: center;
  color: #ffffff;
`;
