import { StyleSheet, Text, View } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/use-redux";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState<string>("");

  const userToken = useAppSelector((state) => state.authState.token);

  useEffect(() => {
    const getMessage = async () => {
      const response = await axios.get(
        `https://user-authentication-demo-8c444-default-rtdb.firebaseio.com/message.json?auth=${userToken}`
      );
      setFetchedMessage(response.data);
    };
    const response = getMessage();
  });

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
