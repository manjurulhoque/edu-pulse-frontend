"use client";

import React, { useState } from "react";
import FooterDashboard from "@/app/components/dashboard/FooterDashboard";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useCategoriesQuery } from "@/app/store/reducers/categories/api";

const CreateCourse: React.FC = () => {
    const [value, setValue] = useState('');
    const [studentWillLearn, setStudentWillLearn] = useState('');
    const {data, error, isLoading, isError, refetch} = useCategoriesQuery(null);
    console.log(data)
    const learningModules = {
        toolbar: [
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
        ],
    }
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="dashboard__main">
            <div className="dashboard__content bg-light-4">
                <div className="row pb-10 mb-4">
                    <div className="col-auto">
                        <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
                        <div className="mt-10">
                            Create your outstanding course!
                        </div>
                    </div>
                </div>

                <div className="row y-gap-60">
                    <div className="col-12">
                        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                            <div className="d-flex items-center py-20 px-30 border-bottom-light">
                                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
                            </div>

                            <div className="py-30 px-30">
                                <form
                                    onSubmit={handleSubmit}
                                    className="contact-form row y-gap-30"
                                    action="#"
                                >
                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Title*
                                        </label>

                                        <input
                                            required
                                            type="text"
                                            placeholder="Learn Figma - UI/UX Design Essential Training"
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Short Description*
                                        </label>

                                        <textarea
                                            required
                                            placeholder="Short Description"
                                            rows={7}
                                        ></textarea>
                                    </div>

                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Description*
                                        </label>

                                        <ReactQuill theme="snow" value={value} onChange={setValue}/>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            What will students learn in your course?*
                                        </label>

                                        <ReactQuill
                                            theme="snow" value={studentWillLearn}
                                            onChange={setStudentWillLearn}
                                            modules={learningModules}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Requirements*
                                        </label>

                                        <ReactQuill
                                            theme="snow" value={studentWillLearn}
                                            onChange={setStudentWillLearn}
                                            modules={learningModules}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Level*
                                        </label>

                                        <input required type="text" placeholder="Select"/>
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Category*
                                        </label>

                                        <input required type="text" placeholder="Select"/>
                                    </div>
                                </form>

                                <div className="row y-gap-20 justify-between pt-15">
                                    <div className="col-auto">
                                        <button className="button -md -purple-1 text-white -right" type={"submit"}>
                                            Create
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterDashboard/>
        </div>
    );
}

export default CreateCourse;