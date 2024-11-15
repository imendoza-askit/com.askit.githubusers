import { User } from "@/core/interfaces/user";
import { Image, Linking, Pressable, Text, View } from "react-native";

interface UserDetailProps {
  user: User;
}

export function UserDetail({ user }: UserDetailProps) {
  const handlePress = async () => {
    const profileURL = user.html_url;

    const supported = await Linking.canOpenURL(profileURL);

    if (supported) {
      await Linking.openURL(profileURL);
      return;
    }

    console.log("No se pudo abrir la URL: ", profileURL);
  };

  return (
    <View>
      <Image source={{ uri: `${user.avatar_url}.png` }} className="w-16 h-16" />
      <Text>Username: {user.login}</Text>
      <Text>Fullname: {user.name}</Text>
      <Pressable onPress={handlePress}>
        <Text>Ir al perfil de Gitub</Text>
      </Pressable>
    </View>
  );
}
