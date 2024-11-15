import { User } from "@/core/interfaces/user";
import axios from "axios";

const client = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  headers: {
    Authorization: process.env.EXPO_PUBLIC_API_TOKEN,
    Accept: "application/vnd.github+json",

    // API VERSION
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

export async function fetchUsers() {
  try {
    const response = await client.get<User[]>("/users", {
      params: {
        per_page: 10,
      },
    });

    const users = response.data;

    return users;
  } catch (err) {
    console.error("Error al solicitar usuarios: ", err);
    return [];
  }
}

export async function fetchUserByID(id: string) {
  const USER_DETAIL_ROUTE = `/user/${id}`;

  try {
    const response = await client.get<User>(USER_DETAIL_ROUTE);

    return response.data;
  } catch (err) {
    console.error("Error al solicitar el usuario: ", err);
    return null;
  }
}
