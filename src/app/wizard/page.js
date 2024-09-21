import WizardForm from "@/components/wizard/wizardForm";

const WizardPage = () => {
    return (
        <div className="mt-[60px]">
            <div className="flex justify-center items-center h-[calc(100vh-60px)]">
                <div>
                    <h1 className="text-4xl mb-8 text-center">
                        Create Your Profile
                    </h1>

                    {/* Wizard form */}
                    <WizardForm />
                </div>
            </div>
        </div>
    );
};

export default WizardPage;
