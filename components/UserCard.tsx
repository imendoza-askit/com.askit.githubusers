import { User } from "@/core/interfaces/user";

import { Image, View, Text } from "react-native";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <View>
      <Image source={{ uri: `${user.avatar_url}.png` }} className="w-16 h-16" />
      <Text>Username: {user.login}</Text>
      <Text>ID: {user.id}</Text>
    </View>
  );
}
