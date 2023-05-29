import styled from '@emotion/styled';
import '@fontsource/roboto/500.css';
import { Button } from '@mui/material';

export const FormLogin = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;

  padding: 45px 45px 45px;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid gray;
  border-radius: 4px;

  background: radial-gradient(
    circle,
    rgba(217, 244, 240, 0.3) 46%,
    rgba(148, 160, 233, 0.5) 100%
  );
`;

export const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
`;

export const SignUpBtn = styled(Button)`
  padding-top: 10px;
  padding-bottom: 10px;

  margin: 0 auto;
  margin-top: 15px;
  width: 250px;

  font-size: 16px;
`;
