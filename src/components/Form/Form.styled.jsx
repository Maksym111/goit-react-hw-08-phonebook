import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  width: 300px;
  padding: 20px;

  border: 2px solid black;
  border-radius: 10px;
`;

const Title = styled.h2`
  align-self: flex-start;
  font-weight: 400;
  font-size: 24px;
`;

const Input = styled(TextField)`
  width: 100%;
  padding: 5px 0;
`;

const BtnAdd = styled(Button)`
  min-width: 100px;
  padding: 5px 10px;
`;

export { Form, Title, Input, BtnAdd };
