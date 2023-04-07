import React from "react";

export const LoginAndRegister: React.FC<{ register: boolean }> = ({
    register,
}) => {
    return (
        <section className="w-screen min-h-[72vh]">
            <div>
                <h3>{register ? "Cadastrar" : "Entrar"}</h3>
            </div>
        </section>
    );
};
