import styled from 'styled-components';

import { Text } from '../../../components/Typography/text.component.js';
import { Card } from 'react-native-paper';

export const Address = styled(Text)`
   font-size: ${({ theme }) => theme.fontSizes.body};
   font-family: ${({ theme }) => theme.fonts.body};
`;
export const RestaurantCard = styled(Card)`
   background-color: ${({ theme }) => theme.colors.bg.primary};
   margin-bottom: ${({ theme }) => theme.space[3]};
`;
export const Rating = styled.View`
   flex-direction: row;
   justify-content: space-between;
   padding-top: ${({ theme }) => theme.space[2]};
   padding-bottom: ${({ theme }) => theme.space[2]};
`;
