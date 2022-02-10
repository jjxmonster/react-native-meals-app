import React from 'react';

import { Spacer } from '../../../components/Spacer/spacer.component.js';
import {
   StyledImageBackground,
   StyledAccountCover,
   StyledAccountContainer,
   StyledAuthButton,
} from '../components/account.styles.js';

const AccountScreen = ({ navigation }) => {
   return (
      <StyledImageBackground>
         <StyledAccountCover />
         <StyledAccountContainer>
            <StyledAuthButton
               icon='lock-open-outline'
               mode='contained'
               onPress={() => navigation.navigate('Login')}
            >
               Login
            </StyledAuthButton>
            <Spacer size='large'>
               <StyledAuthButton
                  icon='lock-open-outline'
                  mode='contained'
                  onPress={() => navigation.navigate('Register')}
               >
                  Register
               </StyledAuthButton>
            </Spacer>
         </StyledAccountContainer>
      </StyledImageBackground>
   );
};

export default AccountScreen;
