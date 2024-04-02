import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// amplify
import { Amplify } from "aws-amplify";
import amplifyconfig from "./src/amplifyconfiguration.json";
Amplify.configure(amplifyconfig);

// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// icon
import { Ionicons } from "@expo/vector-icons";

// screen
import HomeScreen from "./app/screens/HomeScreen";
import UserScreen from "./app/screens/UserScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: { backgroundColor: "#000000", borderTopWidth: 0 }, // ボトムタブのボーダー削除
          headerStyle: {
            backgroundColor: "#000000", // ヘッダーの背景色
            borderBottomWidth: 0, // ヘッダーのボーダー削除
          },
          headerTintColor: "#fff", // ヘッダータイトルの色
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="User"
          component={UserScreen}
          options={{
            title: "Setting",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
