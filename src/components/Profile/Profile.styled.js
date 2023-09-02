import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.div`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 64px;
  background-color: #e4eaf0;
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
`;

export const CardWrap = styled.div`
  padding-top: 48px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  border-radius: 8px;
  overflow: hidden;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 40%;
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
  margin-bottom: 48px;
  text-align: center;
  font-size: 28px;
  color: #8f969e;
`;

export const Stats = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  padding-top: 28px;
  padding-bottom: 28px;
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  align-items: center;
  border: 1px solid #e4eaf0;
  background-color: #f1f5f8;
`;

export const Label = styled.span`
  margin-bottom: 5px;
  font-size: 20px;
  color: #8f969e;
`;

export const Quantity = styled.span`
  font-weight: 600;
  font-size: 24px;
`;
