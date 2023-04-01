import React from "react";

import { HomeTemplate } from "@/templates";
import { ReactQueryProvider } from "@/contexts/reactQuery";

const Home: React.FC = () => (
    <ReactQueryProvider>
        <main className="min-h-screen">
            <HomeTemplate />
        </main>
    </ReactQueryProvider>
);

export default Home;
