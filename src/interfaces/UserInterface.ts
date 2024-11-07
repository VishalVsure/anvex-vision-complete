interface User {
    uid: string;
    name: string;
    email: string;
    username: string;
    role: "admin" | "user" | "operator";
    created_at: string;
    updated_at: string;
}

export default User;