import styled from '@emotion/styled';
import { flexCol } from 'components/Base/Flex.styled';
import { container } from 'components/Base/Container.styled';
import { text } from 'constants/theme';

export const Container = styled.div`
  ${flexCol}
  ${container}
  label: appContainer;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  row-gap: 2.5em;
`;

export const Title = styled.h1`
  margin-bottom: 0.7em;
  font-size: ${text.xxl};
`;
