import styled from '@emotion/styled';
import Button from '@mui/material/Button';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  justify-self: end;
`;

export const EmailTitle = styled.p`
  margin: 0;
`;

export const LogOutBtn = styled(Button)`
  padding: 5px 5px;

  border-radius: 4px;
`;
