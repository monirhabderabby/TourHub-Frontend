import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="min-h-[calc(100vh-60px)] mt-[60px] w-full flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
