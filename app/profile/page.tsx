import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ProfileDetails from "../components/ProfileDetails/ProfileDetails";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }

  if (!session?.user) {
    redirect("/login");
  }

  const userData = {
    user: {
      image: session.user.image || '',
      name: session.user.name || '',
      email: session.user.email || ''
    }
  };

  return <ProfileDetails Data={userData} />;
}
