import React, { useContext } from 'react';
import { Button, View } from 'react-native';

import { AuthenticationContext } from '../../../services/authentication/authentication.context.js';

const SettingsScreen = () => {
   const { onLogout } = useContext(AuthenticationContext);
   return (
      <View style={{ marginTop: 100 }}>
         <Button title='Logout' onPress={onLogout} />
      </View>
   );
};

export default SettingsScreen;
