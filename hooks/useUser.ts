import { User } from "@/core/interfaces/user";
import { fetchUserByID } from "@/services/githubusers";
import { useEffect, useState } from "react";

export function useUser(id: string) {
  const [user, setUser] = useState<User | null>(null);

  const getUser = () => {};

  useEffect(() => {
    fetchUserByID(id).then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return { user };
}
