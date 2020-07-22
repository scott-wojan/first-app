import * as React from 'react';
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {
  Block,
  Checkbox,
  Text,
  Button as GaButton,
  theme,
  Input,
} from 'galio-framework';

import AuthContext from '../../navigation/AuthContext';

export default function SignInScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);

  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <Block flex middle center style={{ marginLeft: 40, marginRight: 40 }}>
        <Input
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <GaButton
          title="Sign in"
          onPress={() => signIn({ username, password })}
        >
          Sign In
        </GaButton>

        <Text>Forgotten your login? Get help here.</Text>

        <Block row middle center space="between">
          <GaButton
            round
            onlyIcon
            shadowless
            icon="twitter"
            iconFamily="Font-Awesome"
            iconColor={theme.COLORS.WHITE}
            iconSize={theme.SIZES.BASE}
            color={theme.COLORS.TWITTER}
          />

          <GaButton
            round
            onlyIcon
            shadowless
            icon="facebook"
            iconFamily="Font-Awesome"
            iconColor={theme.COLORS.WHITE}
            iconSize={theme.SIZES.BASE}
            color={theme.COLORS.FACEBOOK}
          />
        </Block>
        <Block>
          <Text>Don't have an account yet? Register Now</Text>
        </Block>
      </Block>
    </DismissKeyboard>
  );
}
