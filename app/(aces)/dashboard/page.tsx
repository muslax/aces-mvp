import Logout from "@/components/logout";
import { getUserInfo } from "@/lib/cookies";

export default async function Dashboard() {
  const user = await getUserInfo();
  return (
    <div className="dahboard">
      <p>Dashboard</p>
      <Logout />
      <pre className="text-[12.25px]">{JSON.stringify(user, null, 3)}</pre>
    </div>
  );
}