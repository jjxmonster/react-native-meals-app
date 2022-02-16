import React, { useContext, useState } from 'react';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

import { Text } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Spacer } from '../../../components/Spacer/spacer.component.js';
import {
   StyledImageBackground,
   StyledAccountCover,
   StyledAccountContainer,
   StyledAuthButton,
   StyledAuthInput,
   StyledTitle,
} from '../components/account.styles.js';

const LoginScreen = ({ navigation }) => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repeatedPassword, setRepeatedPassword] = useState('');

   const { onRegister, isLoading, error } = useContext(AuthenticationContext);

   return (
      <StyledAccountCover>
         <StyledImageBackground>
            <StyledAccountCover />
            <StyledTitle>Meals To Go</StyledTitle>
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
                     onChangeText={text => setPassword(text)}
                  />
               </Spacer>
               <Spacer size='large'>
                  <StyledAuthInput
                     label='Repeat Password'
                     textContentType='repeatedPassword'
                     secureTextEntry
                     autoCapitalize='none'
                     onChangeText={text => setRepeatedPassword(text)}
                  />
               </Spacer>
               <Spacer size='large'>
                  {!isLoading ? (
                     <StyledAuthButton
                        icon='mail'
                        mode='contained'
                        onPress={() =>
                           onRegister(email, password, repeatedPassword)
                        }
                     >
                        Register
                     </StyledAuthButton>
                  ) : (
                     <ActivityIndicator
                        animating={true}
                        color={Colors.blue300}
                     />
                  )}
               </Spacer>
               {error && (
                  <Spacer size='large'>
                     <Text style={{ color: 'red', textAlign: 'center' }}>
                        {error.replace('FirebaseError: Firebase: ', '')}
                     </Text>
                  </Spacer>
               )}
            </StyledAccountContainer>
            <Spacer size='large'>
               <StyledAuthButton
                  mode='contained'
                  onPress={() => navigation.goBack()}
               >
                  Back
               </StyledAuthButton>
            </Spacer>
         </StyledImageBackground>
      </StyledAccountCover>
   );
};

export default LoginScreen;
