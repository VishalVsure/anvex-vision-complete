import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { set_user } from "@/state/user/UserSlice";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    // setIsLoading(true);
    const loader = toast.loading("Signing you in...");
    try {
      const range = "Auth!A2:Z"; // Adjust the range to include all necessary data
      const res = await axios.get(
        "https://anvex-akila-demo.onrender.com/api/sheets/read",
        {
          params: { email, range },
        }
      );

      // console.log("Response Data:", res.data); // Log the response to see its structure

      if (res.status === 200 && res.data) {
        const users = res.data.data; // Access the data array from the response
        // Filter users by email
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const filteredUsers = users.filter((user: any) => user[0] === email); // user[0] is the email

        if (filteredUsers.length > 0) {
          const user = filteredUsers[0]; // Assuming we expect one match
          const isMatch = await bcrypt.compare(password, user[1]); // user[1] is the password

          if (isMatch) {
            console.log("Login successful");
            localStorage.setItem("email", user[0]);
            localStorage.setItem("isLogin", "true");
            toast.remove(loader);
            toast.success("Signed in");
            navigate("/dashboard");
          } else {
            console.log("Invalid password");
            toast.remove(loader);
            toast.error("Please check your password");
            // alert("Invalid password");
          }
        } else {
          console.log("User not found");
          toast.remove(loader);
          toast.error("Sorry! You do not have access to the dashboard");

          // alert("User not found");
        }
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login");
    }
  };

  return (
    <div className="flex items-center align-middle">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action="#" onSubmit={handleLogin}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} //
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                // onClick={(e) => handleSubmit(e)}
              >
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
