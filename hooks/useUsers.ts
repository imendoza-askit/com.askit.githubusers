import { User } from "@/core/interfaces/user";
import { fetchUsers } from "@/services/githubusers";
import { useEffect, useState } from "react";

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers().then((response) => setUsers(response));
  }, []);

  return { users };
}
