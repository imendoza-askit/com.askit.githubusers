import { LogoTitle } from "@/components/LogoTitle";
import { UserCard } from "@/components/UserCard";

import useUsers from "@/hooks/useUsers";

import { Link, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Text, View } from "react-native";

export default function HomeScreen() {
  const { users } = useUsers();

  return (
    <View className="bg-black">
      <Stack.Screen
        options={{
          title: "GitHub Users",
          headerStyle: { backgroundColor: "#171515" },

          headerTitle: () => <LogoTitle />,
        }}
      />
      <Text className="font-bold text-6xl">List User Screen</Text>
      {users.map((user) => (
        <Link
          key={user.id}
          href={{ pathname: "/[id]", params: { id: user.id } }}
        >
          <UserCard user={user} />
        </Link>
      ))}
      <StatusBar style="dark" />
    </View>
  );
}
