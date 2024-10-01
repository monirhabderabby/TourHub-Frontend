// Packages
import dynamic from "next/dynamic";

// Components
const WizardForm = dynamic(() => import("./_components/wizerd-form"), {
  ssr: false,
});

const WizardPage = () => {
  return (
    <div className="mt-20 md:mt-[60px] lg:mt-20 xl:mt-[60px]">
      <div className="flex justify-center items-center md:h-[calc(100vh-60px)]">
        <div>
          {/* Wizard form */}
          <WizardForm />
        </div>
      </div>
    </div>
  );
};

export default WizardPage;
