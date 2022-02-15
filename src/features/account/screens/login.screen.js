import React, { useContext, useState } from 'react';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { Spacer } from '../../../components/Spacer/spacer.component.js';
import {
   StyledImageBackground,
   StyledAccountCover,
   StyledAccountContainer,
   StyledAuthButton,
   StyledAuthInput,
} from '../components/account.styles.js';

const LoginScreen = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const { onLogin, error } = useContext(AuthenticationContext);
   return (
      <StyledAccountCover>
         <StyledImageBackground>
            <StyledAccountCover />
            <StyledAccountContainer>
               <Spacer size='large'>
                  <StyledAuthInput
                     label='Email'
                     textContentType='emailAddress'
                     keyboardType='email-address'
                     autoCapitalize='none'
                     onChangeText={text => setEmail(text)}
                  />
               </Spacer>
               <Spacer size='large'>
                  <StyledAuthInput
                     label='Password'
                     textContentType='password'
                     secureTextEntry
                     autoCapitalize='none'
                     secure
                     onChangeText={text => setPassword(text)}
                  />
               </Spacer>
               <Spacer size='large'>
                  <StyledAuthButton
                     icon='lock-open-outline'
                     mode='contained'
                     onPress={() => onLogin(email, password)}
                  >
                     Login
                  </StyledAuthButton>
               </Spacer>
            </StyledAccountContainer>
         </StyledImageBackground>
      </StyledAccountCover>
   );
};

export default LoginScreen;
