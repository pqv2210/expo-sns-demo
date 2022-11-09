import * as React from "react";
import {
  Alert,
  Image,
  ImageStyle,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import * as Facebook from "expo-auth-session/providers/facebook";
import Config from "../env/env";
import { colors, images } from "../theme";

export const ButtonFaceBook = () => {
  const [_, response, promptAsync] = Facebook.useAuthRequest({
    clientId: Config.FB_APP_ID,
    redirectUri: Config.FB_REDIRECT_URI,
    scopes: ["email"],
  });

  const onGetEmail = async (accessToken: string) => {
    await fetch(Config.FB_GET_EMAIL_URL + accessToken)
      .then((response) => response.json())
      .then((info) => {
        Alert.alert("Email", info.email);
      })
      .catch((e) => console.log(e));
  };

  React.useEffect(() => {
    const userAuth = async () => {
      try {
        if (response?.type === "success") {
          const { authentication } = response;
          onGetEmail(authentication.accessToken);
        } else {
          console.log(response?.type);
        }
      } catch (e) {
        console.log(e);
      }
    };
    userAuth();
  }, [response]);

  const onLoginFacebook = () => promptAsync();

  return (
    <TouchableOpacity style={BTN} onPress={onLoginFacebook}>
      <View style={WRAP_LOGO}>
        <Image style={LOGO} source={images.logoFacebook} />
      </View>
      <Text style={TX}>Login with Facebook</Text>
    </TouchableOpacity>
  );
};

const BTN: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: colors.mariner,
  borderRadius: 4,
};

const WRAP_LOGO: ViewStyle = {
  padding: 10,
  backgroundColor: colors.catalinaBlue,
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
};

const LOGO: ImageStyle = {
  height: 20,
  width: 20,
  resizeMode: "contain",
  tintColor: "white",
};

const TX: TextStyle = {
  fontWeight: "bold",
  color: colors.white,
  marginHorizontal: 20,
};
