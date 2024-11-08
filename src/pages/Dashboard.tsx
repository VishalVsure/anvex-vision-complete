import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const username = useSelector((state: RootState) => state.user.username);
  const email = useSelector((state: RootState) => state.user.email);
  const token = useSelector((state: RootState) => state.user.token);
  return (
    <>
      {username},{email},{token}
      <p>Please use the sidebar to view pages</p>
    </>
  );
}
