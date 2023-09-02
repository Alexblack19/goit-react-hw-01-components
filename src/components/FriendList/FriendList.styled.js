import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Container = styled.ul`
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  padding: 64px 120px;
  background-color: #e4eaf0;
  box-shadow: 5px 5px 5px 0px rgba(179, 179, 179, 1);
`;

export const Li = styled.li`
  &:not(:last-child) {
    margin-bottom: 16px;
  }
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 12px;
  background-color: #fdfdfd;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
  &:hover {
    box-shadow: 4px 4px 1px rgba(46, 47, 66, 0.3);
  }
`;

export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    return status ? '#41A842' : '#FF464F';
  }};
`;

export const Avatar = styled.img`
  width: 68px;
  background-color: #e4eaf0;
  border-radius: 8px;
`;

export const Name = styled.p`
  font-weight: 600;
  font-size: 28px;
  color: #515151;
`;
