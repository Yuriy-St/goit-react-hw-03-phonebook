import { Form, Field } from 'formik';

import styled from '@emotion/styled';
import { color, text } from 'constants/theme';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  max-width: 20em;
  border: 1px solid ${color.grey_800};
  border-radius: 0.25em;
  padding: 1em;
`;

export const Label = styled.label(`
  display: block;
  margin-bottom: 0.25em;
  font-size: 1.25rem;
  font-weight: 700;
`);

export const Input = styled(Field)`
  margin-bottom: 0.25em;
`;

export const ButtonSubmit = styled.button(`
  display: flex;
  justify-content: center;
  align-items: center;
  width: max-content;
  padding-top: 0.5em;
  padding-right: 0.25em;
  padding-bottom: 0.5em;
  padding-left: 0.25em;
  border: 1px solid ${color.grey_500};
  border-radius: 0.25em;
  background-color: ${color.grey_200};
  font-size: ${text.s};
  line-height: 1em;


  &:hover {
		background-color: ${color.grey_200};
		box-shadow: 0 0 0.5em ${color.grey_400};
	}

	&:active {
		background-color: ${color.grey_300};
		box-shadow: none;
	}
`);

export const ValidationMessage = styled.div(`
  color: ${color.error};
  font-size: 0.8em;
`);
