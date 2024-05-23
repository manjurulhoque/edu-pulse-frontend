"use client";

import React, { useMemo, useState } from "react";
import FooterDashboard from "@/app/components/dashboard/FooterDashboard";
import 'react-quill/dist/quill.snow.css';
import { useCategoriesQuery } from "@/app/store/reducers/categories/api";
import dynamic from "next/dynamic";
import { FormikErrors, useFormik } from "formik";
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

interface FormValues {
    title: string;
    short_description: string;
    description: string;
    student_will_learn: string;
    requirements: string;
    level: string;
    category: string;
}


const formSchema = z.object({
    title: z.string().min(3, 'Title is required'),
    description: z.string().min(10, 'At least 10 characters is required'),
    level: z.string().min(1, 'Level is required'),
    category: z.string().min(1, 'Category is required'),
    short_description: z.string().optional(),
    student_will_learn: z.string().optional(),
    requirements: z.string().optional(),
});


const CreateCourse: React.FC = () => {
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), {ssr: false}), []);
    const {data, error, isLoading: isCategoriesLoading, isError, refetch} = useCategoriesQuery(null);

    const learningModules = {
        toolbar: [
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link'],
        ],
    }

    const formik = useFormik<FormValues>({
        initialValues: {
            title: '',
            short_description: '',
            description: '',
            student_will_learn: '',
            requirements: '',
            level: '',
            category: '',
        },
        // validationSchema: toFormikValidationSchema(formSchema),
        validate: values => {
            try {
                formSchema.parse(values);
                return {};
            } catch (error) {
                return (error as z.ZodError).formErrors.fieldErrors;
            }
        },
        onSubmit: (values) => {
            // Handle form submission
            console.log(values);
        },
    });
    const handleSubmit = (e: any) => {
        e.preventDefault();
    };

    return (
        <div className="dashboard__main">
            <div className="dashboard__content bg-light-4">
                <div className="row pb-10 mb-4">
                    <div className="col-auto">
                        <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
                        <div className="mt-10">Create your outstanding course!</div>
                    </div>
                </div>

                <div className="row y-gap-60">
                    <div className="col-12">
                        <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
                            <div className="d-flex items-center py-20 px-30 border-bottom-light">
                                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
                            </div>

                            <div className="py-30 px-30">
                                <form onSubmit={formik.handleSubmit} className="contact-form row y-gap-30">
                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Title*
                                        </label>

                                        <input
                                            required
                                            type="text"
                                            placeholder="Learn Figma - UI/UX Design Essential Training"
                                            name="title"
                                            value={formik.values.title}
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                        />
                                        {formik.errors.title && <div>{formik.errors.title}</div>}
                                    </div>

                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Short Description*
                                        </label>

                                        <textarea
                                            placeholder="Short Description"
                                            rows={7}
                                            name="short_description"
                                            value={formik.values.short_description}
                                            onChange={formik.handleChange}
                                        ></textarea>
                                        {formik.errors.short_description &&
                                            <div>{formik.errors.short_description}</div>}
                                    </div>

                                    <div className="col-12">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Description*
                                        </label>

                                        <ReactQuill
                                            theme="snow"
                                            value={formik.values.description}
                                            onChange={(value) => formik.setFieldValue('description', value)}
                                        />
                                        {formik.errors.description && <div>{formik.errors.description}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            What will students learn in your course?*
                                        </label>

                                        <ReactQuill
                                            theme="snow"
                                            value={formik.values.student_will_learn}
                                            onChange={(value) => formik.setFieldValue('student_will_learn', value)}
                                            modules={learningModules}
                                        />
                                        {formik.errors.student_will_learn &&
                                            <div>{formik.errors.student_will_learn}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Requirements*
                                        </label>

                                        <ReactQuill
                                            theme="snow"
                                            value={formik.values.requirements}
                                            onChange={(value) => formik.setFieldValue('requirements', value)}
                                            modules={learningModules}
                                        />
                                        {formik.errors.requirements && <div>{formik.errors.requirements}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Level*
                                        </label>

                                        <select
                                            className="form-control"
                                            name="level"
                                            value={formik.values.level}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Select level</option>
                                            <option value="beginner">Beginner</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                        {formik.errors.level && <div>{formik.errors.level}</div>}
                                    </div>

                                    <div className="col-md-6">
                                        <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                            Course Category*
                                        </label>

                                        <select
                                            className="form-control"
                                            name="category"
                                            value={formik.values.category}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="">Select category</option>
                                            {!isCategoriesLoading &&
                                                data?.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                        </select>
                                        {formik.errors.category && <div>{formik.errors.category}</div>}
                                    </div>

                                    <div className="row y-gap-20 justify-between pt-15">
                                        <div className="col-auto">
                                            <button
                                                className="button -md -purple-1 text-white -right"
                                                type="submit"
                                            >
                                                Create
                                            </button>
                                        </div>
                                    </div>
                                </form>
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