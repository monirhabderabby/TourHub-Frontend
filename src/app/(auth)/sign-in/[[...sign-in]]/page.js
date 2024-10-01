import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] mt-[60px] w-full flex justify-center items-center">
      <SignIn />
    </div>
  );
};

export default SignInPage;
