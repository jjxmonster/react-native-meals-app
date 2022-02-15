import styled from 'styled-components';
import { Button, TextInput } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors.js';

export const StyledImageBackground = styled.ImageBackground.attrs({
   source: require('../../../../assets/home-bg.jpg'),
})`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export const StyledAccountCover = styled.View`
   position: absolute;
   width: 100%;
   height: 100%;
   background-color: rgba(255, 255, 255, 0.3);
`;

export const StyledAccountContainer = styled.View`
   background-color: rgba(255, 255, 255, 0.7);
   padding: ${({ theme }) => theme.space[4]};
   margin-top: ${({ theme }) => theme.space[2]};
`;

export const StyledAuthButton = styled(Button).attrs({
   color: colors.brand.primary,
})`
   padding: ${({ theme }) => theme.space[2]};
`;

export const StyledAuthInput = styled(TextInput)`
   width: 300px;
`;
