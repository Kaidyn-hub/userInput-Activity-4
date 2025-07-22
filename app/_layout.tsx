import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="index" 
        options={{
          headerTitle: "Home",
          headerTransparent: true,
          headerShown: false
        }} 
      />
      <Stack.Screen 
        name="login" 
        options={{
          headerTitle: "Sign In",
          headerTitleStyle: {
            color: "#ff4f5a",
          },
           headerTintColor: "#ff4f5a",
        }} 
      />
      <Stack.Screen 
        name="signup" 
        options={{
          headerTitle: "Create New Account",
          headerTitleStyle: {
            color: "#ff4f5a",
          },
           headerTintColor: "#ff4f5a",
        }} 
      />
    </Stack>
  );
}
