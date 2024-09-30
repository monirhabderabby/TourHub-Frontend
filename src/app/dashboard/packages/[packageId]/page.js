import Package from "./components/package";

const PackagePage = ({ params }) => {
    return (
        <div>
            <Package packageId={params.packageId} />
        </div>
    );
};

export default PackagePage;
