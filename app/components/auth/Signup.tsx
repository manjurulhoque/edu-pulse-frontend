"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await signIn("credentials", {
            email: email,
            password: password,
            redirect: false,
        });

        console.log(result);

        if (result?.status === 401) {
            // If there is an error, update the state to display the error message
            setErrorMessage("Invalid credentials");
        } else {
            // Redirect on successful login
            window.location.href = "http://localhost:3000";
        }
    };

    return (
        <div className="main-content">
            <div className="content-wrapper js-content-wrapper overflow-hidden">
                <section className="form-page js-mouse-move-container">
                    <div className="form-page__content lg:py-50">
                        <div className="container">
                            <div className="row justify-center items-center">
                                <div className="col-xl-6 col-lg-8">
                                    <div className="px-50 py-50 md:px-25 md:py-25 bg-white shadow-1 rounded-16">
                                        <h3 className="text-30 lh-13">Sign Up</h3>
                                        <p className="mt-10">
                                            Already have an account?
                                            <Link
                                                href="/login"
                                                className="text-purple-1"
                                            >
                                                Login
                                            </Link>
                                        </p>

                                        <p className="alert alert-warning">{errorMessage}</p>
                                        <form
                                            className="contact-form respondForm__form row y-gap-20 pt-30"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="col-12">
                                                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                                    Name
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={name}
                                                    onChange={(e) =>
                                                        setName(e.target.value)
                                                    }
                                                    placeholder="john doe"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                                    Email
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="title"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                                                    Password
                                                </label>
                                                <input
                                                    required
                                                    type="password"
                                                    name="title"
                                                    value={password}
                                                    onChange={(e) =>
                                                        setPassword(
                                                            e.target.value
                                                        )
                                                    }
                                                    placeholder="****"
                                                />
                                            </div>
                                            <div className="col-12">
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    id="submit"
                                                    className="button -md -yellow-1 text-dark-1 fw-500 w-1/1"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Signup;
