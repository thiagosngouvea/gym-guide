import React from "react";

import { globalStyles } from "@styles/globalStyles";
import { ActivityIndicator, View } from "react-native";
import { defaultStyles } from "../../styles/globalStyles";

const AppLoading = React.memo(function AppLoading() {
  return (
    <View
      style={[
        globalStyles.fullPage,
        globalStyles.flex,
        globalStyles.alignItemsCenter,
        globalStyles.justifyContentCenter,
      ]}
    >
      <ActivityIndicator size="large" color={defaultStyles.blue} />
    </View>
  );
});

export default AppLoading;
