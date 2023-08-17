import styled from '@emotion/styled';
import { color } from 'constants/theme';

export const StyledContact = styled.li`
  width: 100%;
  margin-left: 2em;
  display: flex;
  justify-content: space-between;
`;

export const DeleteBtn = styled.button`
  justify-content: center;
  align-items: center;
  width: max-content;
  border: 1px solid ${color.grey_500};
  border-radius: 0.25em;
  background-color: ${color.grey_200};
  font-size: 1em;
  line-height: 1;

  &:hover {
    background-color: ${color.error};
    box-shadow: 0 0 0.5em ${color.danger};
  }

  &:active {
    background-color: ${color.danger};
    box-shadow: none;
  }
`;
