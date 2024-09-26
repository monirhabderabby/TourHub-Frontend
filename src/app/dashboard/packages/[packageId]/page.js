import dynamic from "next/dynamic";

const PackageForm = dynamic(() => import("./components/packageForm"), {
    ssr: false,
});

const PackagePage = () => {
    return (
        <div>
            <PackageForm />
        </div>
    );
};

export default PackagePage;
