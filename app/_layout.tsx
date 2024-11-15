import { Stack } from "expo-router";

import { LogoTitle } from "../components/LogoTitle";

import "../global.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
