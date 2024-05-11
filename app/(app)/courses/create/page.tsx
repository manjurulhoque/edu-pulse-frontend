import Header from "@/app/components/layout/Header";
import { Metadata } from "next";
import PageLinks from "@/app/components/common/PageLinks";

export const metadata: Metadata = {
    title: "Create course",
    description: "Create course page",
};

const CreateCoursesPage = () => {
    return (
        <div className="main-content">
            <Header/>

            <div className="content-wrapper  js-content-wrapper overflow-hidden">
                <PageLinks dark={null}/>
            </div>
        </div>
    )
}

export default CreateCoursesPage;