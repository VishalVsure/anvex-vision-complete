import DashboardLayout from "@/layout/DashboardLayout";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const username = useSelector((state: RootState) => state.user.username);
  const email = useSelector((state: RootState) => state.user.email);
  const token = useSelector((state: RootState) => state.user.token);
  return (
    <>
      <DashboardLayout>
        {username},{email},{token}
        <p>Please use the sidebar to view pages</p>
      </DashboardLayout>
    </>
  );
}
