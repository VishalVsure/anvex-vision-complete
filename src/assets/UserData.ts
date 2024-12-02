import User from "@/interfaces/UserInterface";

const users: User[] = [
  {
    uid: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    username: "johndoe",
    role: "admin",
    image: "/Person3.png",
    created_at: "2023-01-01",
    updated_at: "2023-10-01",
  },
  {
    uid: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    username: "janesmith",
    role: "user",
    image: "/Person1.png",
    created_at: "2023-02-01",
    updated_at: "2023-09-01",
  },
  {
    uid: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    username: "alicej",
    role: "operator",
    image: "/Person2.png",
    created_at: "2023-03-01",
    updated_at: "2023-08-01",
  },
];
export default users;
