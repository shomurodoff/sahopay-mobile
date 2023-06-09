import React from "react";
import { Image, ImageBackground, TextInput, View } from "react-native";
import { Outlet } from "react-router-dom";
import { withExpoSnack } from "nativewind";
import BgImage from "../../assets/images/auth/auth-bg.jpeg";
import LogoImage from "../../assets/images/logo.png";
import { Center, Text, HStack } from "native-base";
const Index = () => {
  return (
    <View>
      <ImageBackground
        source={BgImage}
        height="100%"
        style={{
          flex: 1,
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Center width={"100%"} height={"100%"}>
          <HStack justifyContent={"center"} space={2} alignItems={"center"}>
            <Image
              source={LogoImage}
              style={{
                width: 55,
                height: 35,
              }}
            />
            <Text italic bold fontSize={"3xl"} color={"#b937de"}>
              Sahopay
            </Text>
          </HStack>
          <Outlet />
        </Center>
      </ImageBackground>
    </View>
  );
};

export default withExpoSnack(Index);
