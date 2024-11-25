import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import bcrypt from "bcryptjs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signupSchema } from "@/schema/SignupSchema";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit");
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const range = "Auth!A2";
      const row = [email, hashedPassword];
      const values = [row];
      const res = await axios.post(
        "https://anvex-akila-demo.onrender.com/api/sheets/create",
        {
          range,
          values,
        }
      );

      if (res.status == 200) {
        console.log("user added");
      }
    } catch (error) {
      console.log("error ", error);
    }
    console.log(signupSchema.safeParse({ email, password }));

    Navigate("/login");
  };

  const Navigate = useNavigate();
  return (
    <div className="py-36">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>Enter the details to signup</CardDescription>
        </CardHeader>
        <CardContent>
          <form action="" onSubmit={handleSubmit}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  placeholder="Password should be 8 characters long"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Confirm Password</Label>
                </div>
                <Input
                  id="cpassword"
                  type="password"
                  placeholder="Password should be 8 characters long"
                  value={cpassword}
                  onChange={(e) => setCpassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Signup
              </Button>
              <Button variant="outline" className="w-full">
                Signup with Google
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
