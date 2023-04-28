import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { arnekG, oswald, tiro } from "@/functions/fonts";
import { useRedirect } from "@/hooks";
import { UserDataContext } from "@/contexts/userDataLogin";

export const Banner: React.FC = () => {
    const { logined, setRedirectOnLogin, allUserData } =
        useContext(UserDataContext);
    const { push } = useRedirect();

    gsap.registerPlugin(ScrollTrigger);
    const refBanner = useRef(null);

    useEffect(() => {
        const element: any = refBanner.current;

        gsap.to(element.querySelector("#banner"), {
            scale: 0,
            opacity: 0,
            xPercent: 100,
            ease: "slow",
            scrollTrigger: {
                trigger: element.querySelector("#banner-text"),
                scrub: 2,
                pin: true,
                start: "top 20%",
                end: "bottom 20%",
            },
        });
    }, []);

    return (
        <section
            ref={refBanner}
            className="bg-banner bg-cover bg-center bg-fixed bg-no-repeat w-screen h-[90vh] flex justify-between"
        >
            <div />
            <div
                id="banner"
                className="bg-pallet-white w-[30%] h-[50%] flex flex-col justify-around items-center pl-6 pr-6 rounded-lg border-2 border-pallet-blue mt-10 mr-20 max-lg:mr-8 max-lg:w-[40%]"
            >
                <h1
                    id="banner-text"
                    className={`font-bold text-xl text-center max-md:text-sm ${oswald.className}`}
                >
                    Bem-vindo {logined && `${allUserData.name}, `}ao RM
                    E-commerce
                </h1>
                <p
                    className={`font-medium tracking-wide max-md:text-xs ${arnekG.className}`}
                >
                    Este é um E-commerce falso para fins de treinando com a
                    biblioteca ReactJS, o framework NextJS e uma store fake API
                    para meu portfólio.
                </p>
                <button
                    type="button"
                    className={`bg-pallet-black p-3 pr-4 pl-4 text-pallet-white rounded-xl font-bold text-sm border-2 border-pallet-orange shadow-lg shadow-pallet-black hover:bg-pallet-orange hover:transition-colors max-md:text-xs ${tiro.className}`}
                    onClick={() => {
                        if (!logined)
                            setRedirectOnLogin("redirecionar=produtos");
                        push("/produtos");
                    }}
                >
                    Veja os produtos
                </button>
            </div>
        </section>
    );
};
