import { currentUser } from "@clerk/nextjs/server";
import dynamic from "next/dynamic";

const ProfileForm = dynamic(() => import("./(components)/ProfileForm"), {
  ssr: false,
});

const Page = async () => {
  const auth = await currentUser();
  return (
    <div>
      <ProfileForm userId={auth?.id} />
    </div>
  );
};

export default Page;
