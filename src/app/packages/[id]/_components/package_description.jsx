import RichTextViewer from "@/components/richTextEditor/richTextViewer";
import PackageSectionTitle from "./package_section_title";

const PackageDescription = ({ description }) => {
    return (
        <div className="mt-12">
            <PackageSectionTitle title="Tour Overview" />
            <div className="mt-4 md:mt-6">
                <RichTextViewer content={description} />
            </div>
        </div>
    );
};

export default PackageDescription;
