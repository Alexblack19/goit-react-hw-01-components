import styled from 'styled-components';

export const Section = styled.section`  
  padding: 40px 0px;
`;

export const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 64px;
  background-color: #bab5ae;
  box-shadow: 7px 7px 10px 0px rgba(113, 106, 97, 1); 
  border-radius: 5px;
`;

export const Description = styled.div`
  padding: 48px 60px;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 60%;
  background-color: #bab5ae;  
  border-radius: 50%;
`;

export const Name = styled.p`
  margin-top: 38px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 40px;
  text-align: center;
`;

export const Tag = styled.p`
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #8f969e;
`;

export const Location = styled.p`
  text-align: center;
  font-size: 28px;
  color: #8f969e;
`;
