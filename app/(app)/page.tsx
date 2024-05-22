import React from "react";
import { Metadata } from "next";
import HomeHero from "@/app/components/HomeHero";
import HomeCourses from "@/app/components/courses/HomeCourses";
import { toast } from "react-toastify";

export const metadata: Metadata = {
    title: "Home",
    description: "Home page",
};

const Home = () => {
    return (
        <div className="main-content overflow-hidden">
            <HomeHero/>
            <HomeCourses/>
        </div>
    );
};

export default Home;
