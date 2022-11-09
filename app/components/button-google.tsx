import * as React from "react";
import {
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as Google from "expo-auth-session/providers/google";
import Config from "../env/env";
import { colors, images } from "../theme";

export const ButtonGoogle = () => {
  const [_, response, promptAsync] = Google.useAuthRequest({
    expoClientId: Config.EXPO_CLIENT_ID,
    iosClientId: Config.IOS_CLIENT_ID,
    androidClientId: Config.ANDROID_CLIENT_ID,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log("authentication", authentication);
    }
  }, [response]);

  const onLoginGoogle = () => promptAsync();

  return (
    <TouchableOpacity style={BTN} onPress={onLoginGoogle}>
      <View style={WRAP_LOGO}>
        <Image style={LOGO} source={images.logoGoogle} />
      </View>
      <Text style={TX}>Login with Google</Text>
    </TouchableOpacity>
  );
};

const BTN: ViewStyle = {
  width: "65%",
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colors.cornflowerBlue,
  borderRadius: 4,
  marginTop: 20,
};

const WRAP_LOGO: ViewStyle = {
  padding: 8,
  backgroundColor: colors.white,
  margin: 3,
  marginRight: 0,
};

const LOGO: ImageStyle = {
  height: 20,
  width: 20,
  resizeMode: "contain",
};

const TX: TextStyle = {
  fontWeight: "bold",
  color: colors.white,
  marginLeft: 15,
};
