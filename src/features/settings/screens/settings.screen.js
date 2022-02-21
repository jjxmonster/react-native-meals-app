import React, { useContext } from 'react';
import styled from 'styled-components/native';

import { SafeAreaView } from 'react-native';
import { List, Avatar } from 'react-native-paper';
import { Text } from '../../../components/Typography/text.component.js';
import { Spacer } from '../../../components/Spacer/spacer.component.js';

import { AuthenticationContext } from '../../../services/authentication/authentication.context';

const SettingsItem = styled(List.Item)`
   padding: ${({ theme }) => theme.space[3]};
`;
const AvatarContainer = styled.View`
   align-items: center;
`;

const SettingsScreen = ({ navigation }) => {
   const { onLogout, user } = useContext(AuthenticationContext);
   return (
      <SafeAreaView
         style={{
            flex: 1,
         }}
      >
         <AvatarContainer>
            <Avatar.Icon size={180} icon='human' backgroundColor='#2182BD' />
            <Spacer position='top' size='large'>
               <Text variant='label'>{user.email}</Text>
            </Spacer>
         </AvatarContainer>
         <List.Section>
            <SettingsItem
               title='Favourites'
               description='View your favourites'
               left={props => (
                  <List.Icon {...props} color='black' icon='heart' />
               )}
               onPress={() => navigation.navigate('Favourites')}
            />
            <SettingsItem
               style={{ padding: 16 }}
               title='Logout'
               left={props => (
                  <List.Icon {...props} color='black' icon='door' />
               )}
               onPress={onLogout}
            />
         </List.Section>
      </SafeAreaView>
   );
};
export default SettingsScreen;
