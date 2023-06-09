import React from "react";
import Router from "./router";
import { Text, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import Query from "./services/query";
const App = () => {
  return (
    <NativeBaseProvider>
      <Query>
        <Router />
      </Query>
    </NativeBaseProvider>
  );
};

export default App;
