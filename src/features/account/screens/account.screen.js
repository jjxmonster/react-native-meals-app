import React from 'react';

import LottieView from 'lottie-react-native';

import { Spacer } from '../../../components/Spacer/spacer.component.js';
import {
   StyledImageBackground,
   StyledAccountCover,
   StyledAccountContainer,
   StyledAuthButton,
   StyledTitle,
   AnimationWrapper,
} from '../components/account.styles.js';

const AccountScreen = ({ navigation }) => {
   return (
      <StyledImageBackground>
         <StyledAccountCover />
         <AnimationWrapper>
            <LottieView
               key='animation'
               autoPlay
               loop
               resizeMode='cover'
               source={require('../../../../assets/watermelon.json')}
            />
         </AnimationWrapper>
         <StyledTitle>Meals To Go</StyledTitle>
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
                  icon='mail'
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
