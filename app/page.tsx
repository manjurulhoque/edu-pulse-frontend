import React from "react";
import HomeHero from "./components/HomeHero";
import HomeCourses from "./components/courses/HomeCourses";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
};

const Home = () => {
    return (
        <div className="main-content overflow-hidden">
            <HomeHero />
            <HomeCourses />
        </div>
    );
};

export default Home;
