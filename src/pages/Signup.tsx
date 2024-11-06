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
import { useNavigate } from "react-router-dom";

// user_id (primary key)
// username
// password_hash
// email
// role (e.g., 'admin', 'user', 'operator')
// created_at
// updated_at

export default function SignUpPage() {
  const Navigate = useNavigate();  
  return (
    <div className="flex items-center align-middle py-36">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter the details to signup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" onClick={()=> Navigate('/dash')}>
              Signup
            </Button>
            <Button variant="outline" className="w-full" onClick={()=> Navigate('/dash')}   >
              Signup with Google
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
