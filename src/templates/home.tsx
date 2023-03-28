import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const HomeTemplate: React.FC = () => (
    <div className="bg-white min-h-screen w-screen flex flex-col items-center">
        <Header />
        <div className="max-h-screen min-h-[466px]">teste papai2</div>
        <Footer />
    </div>
);
