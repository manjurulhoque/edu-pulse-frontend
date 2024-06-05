"use client";

import React, {useState} from "react";

interface CourseCurriculumProps {
    sections: Section[];
}

const CourseCurriculum: React.FC<CourseCurriculumProps> = ({sections}) => {
    const [allSections, setAllSections] = useState<Section[]>(sections);
    const addSection = () => {
        const newSection: Section = {title: `New section#${allSections.length + 1}`};
        setAllSections([...allSections, newSection]);
    };

    return (
        <div className="py-30 px-30">
            {allSections.map((section, index) => (
                <SectionCurriculum key={section.title} section={section} i={index}/>
            ))}

            <div className="row y-gap-20 justify-end pt-30">
                <div className="col-auto sm:w-1/1">
                    <button type={"button"} className="button -md -purple-1 text-white sm:w-1/1" onClick={addSection}>
                        New section
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CourseCurriculum;

const SectionCurriculum: React.FC<{ section: Section, i: number }> = ({section, i}) => {
    const [currentOpenItem, setCurrentOpenItem] = useState();
    section.lessons = [{title: "", content: ""}]
    return (
        <>
            <div className={`row ${i != 0 ? "pt-30" : ""}  `}>
                <div className="col-12">
                    <h4 className="text-16 lh-1 fw-500">Section title</h4>
                </div>

                <div className="col-12">
                    <div className="accordion -block-2 text-left js-accordion">
                        {section.lessons?.map((itm, index) => (
                            <div
                                key={index}
                                className={`accordion__item -dark-bg-dark-1 mt-10 ${
                                    currentOpenItem == `${i},${index}` ? "is-active" : ""
                                } `}
                            >
                                <div
                                    className="accordion__button py-20 px-30 bg-light-4"
                                    onClick={() =>
                                        setCurrentOpenItem((pre): any => pre == `${i},${index}` ? "" : `${i},${index}`)
                                    }
                                >
                                    <div className="d-flex items-center">
                                        <div className="icon icon-drag mr-10"></div>
                                        <span className="text-16 lh-14 fw-500 text-dark-1">
                                        Lesson title
                                    </span>
                                    </div>

                                    <div className="d-flex x-gap-10 items-center">
                                        <a href="#" className="icon icon-edit mr-5"></a>
                                        <a href="#" className="icon icon-bin"></a>
                                        <div className="accordion__icon mr-0">
                                            <div
                                                className="d-flex items-center justify-center icon icon-chevron-down"></div>
                                            <div
                                                className="d-flex items-center justify-center icon icon-chevron-up"></div>
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="accordion__content"
                                    style={
                                        currentOpenItem == `${i},${index}`
                                            ? {maxHeight: "100px"}
                                            : {}
                                    }
                                >
                                    <div className="accordion__content__inner px-30 py-30">
                                        <div className="d-flex x-gap-10 y-gap-10 flex-wrap">
                                            <div>
                                                <a
                                                    href="#"
                                                    className="button -sm py-15 -purple-3 text-purple-1 fw-500"
                                                >
                                                    Add Article +
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}