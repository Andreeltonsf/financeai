import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const Home = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/login");
  }
  return (
    <div className="flez h-full">
      <UserButton showName />
    </div>
  );
};

export default Home;
