import React, { useEffect, useState } from "react";
import { UserContactCard } from "./components/UserContactCard";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  company: string;
  jobTitle: string;
  avatar: string;
}

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        console.log("fetchUsers: Starting to fetch users");
        const userPromises = Array(10)
          .fill(null)
          .map(() =>
            fetch("https://test-api.santop.xyz/api/user").then((res) => {
              if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
              return res.json();
            })
          );

        const fetchedUsers = await Promise.all(userPromises);
        console.log("fetchUsers data :>> ", fetchedUsers);
        setUsers(fetchedUsers);
        setLoading(false);
      } catch (err) {
        console.log("fetchUsers error :>> ", err);
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="p-8 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">User Contact Cards</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserContactCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;
