import { Text } from "react-native";
import { UserDetail } from "@/components/UserDetail";
import { useUser } from "@/hooks/useUser";
import { useLocalSearchParams } from "expo-router";

export default function DetailUser() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useUser(id);

  if (!user) {
    return <Text>"Usuario no encontrado."</Text>;
  }
  return <UserDetail user={user} />;
}
