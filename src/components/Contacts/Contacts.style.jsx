import styled from '@emotion/styled';
import { Button } from '@mui/material';

const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  padding-bottom: 0;
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 10px;
  font-style: italic;
`;

const Input = styled.input`
  width: 200px;
  padding: 5px 10px;
  margin-bottom: 20px;

  border: 1px solid black;
  border-radius: 4px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover,
  :focus {
    border-color: #2c9cdd;
    outline: none;
  }

  :focus {
    box-shadow: gray 0px 4px 8px;
  }
`;

const ListContacts = styled.ul`
  list-style: inside;
  margin: 0;
  padding: 0;
`;

const ContactItem = styled.li`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;

  width: 400px;
  height: 40px;
  margin-left: 20px;

  :first-of-type {
    margin-top: 10px;
  }
`;

const DeleteBtn = styled(Button)`
  width: 80px;
  height: 25px;

  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
`;

export {
  ContainerContacts,
  Title,
  Label,
  Input,
  ListContacts,
  ContactItem,
  DeleteBtn,
};
