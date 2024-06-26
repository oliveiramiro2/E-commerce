"use client";

import React, { useContext } from "react";
import LoadingIcons from "react-loading-icons";
import { useSearchParams } from "next/navigation";

import { arnekG, oswald } from "@/functions/fonts";
import { useLoginOrRegister, useLoginRegister, useShowLoading } from "./hooks";
import { useRedirect } from "@/hooks";
import { loginInvalid, loginValid, urlParamsRedirect } from "./functions";
import { CheckBoxUser, InputUser } from "./components";
import { UserDataContext } from "@/contexts/userDataLogin";

export const LoginAndRegister: React.FC<{
    registerComponent: boolean;
    editProfile: boolean;
}> = ({ registerComponent, editProfile }) => {
    const { errors, handleSubmit, register } = useLoginRegister(
        registerComponent,
        editProfile
    );
    const { dataInputs } = useLoginOrRegister(registerComponent);
    const { showIconLoading, setShowIconLoading } = useShowLoading();
    const { setAllUserData, setLogined, allUserData } =
        useContext(UserDataContext);
    const { push } = useRedirect();
    const path = useSearchParams();

    const pathRedirect: string | undefined = urlParamsRedirect(path.toString());

    return (
        <section className="w-screen min-h-[72vh] flex justify-center">
            <div className="w-[80%] max-md:w-[90%] flex flex-col items-center mb-8">
                <div className="w-[45%] max-xl:w-[60%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] flex justify-center mb-3 mt-6">
                    <h3
                        className={`font-black text-3xl self-center max-lg:right-0 ${oswald.className}`}
                    >
                        {!registerComponent
                            ? "Entrar"
                            : editProfile
                            ? "Editar Perfil"
                            : "Cadastrar"}
                    </h3>
                </div>
                <form className="flex flex-col gap-y-4 w-full items-center">
                    {dataInputs.map(item => (
                        <InputUser
                            key={item.id}
                            index={item.id}
                            data={{
                                ...item,
                                register,
                                errors,
                                registerForm: registerComponent,
                            }}
                        />
                    ))}
{registerComponent && <CheckBoxUser register={register} />}
                    {!editProfile && (
                        <button
                            type="button"
                            onClick={() =>
                                push(
                                    registerComponent
                                        ? `/entrar${
                                              pathRedirect !== undefined
                                                  ? pathRedirect
                                                  : ""
                                          }`
                                        : `/cadastro${
                                              pathRedirect !== undefined
                                                  ? pathRedirect
                                                  : ""
                                          }`
                                )
                            }
                            className={`text-pallet-blue font-bold tracking-wide hover:border-b hover:border-pallet-blue ${arnekG.className}`}
                        >
                            {registerComponent
                                ? "Já possui uma conta? Faça seu login"
                                : "Não possui uma conta? Faça seu registro"}
                        </button>
                    )}

                    <button
                        type="submit"
                        className={`self-center rounded-lg p-2 pl-8 pr-8 mt-2 bg-pallet-purple text-pallet-white font-semibold tracking-wide shadow-lg shadow-gray-400 hover:bg-[#bf3eee] hover:transition-colors ${oswald.className}`}
                        onClick={handleSubmit(
                            data =>
                                loginValid({
                                    data,
                                    setShowIconLoading,
                                    setAllUserData,
                                    allUserData,
                                    setLogined,
                                    push,
                                    paramRedirect: () =>
                                        pathRedirect === undefined
                                            ? `/`
                                            : `/${
                                                  pathRedirect
                                                      .replace("&", "?")
                                                      .split(
                                                          "redirecionar="
                                                      )[1] ||
                                                  pathRedirect.split(
                                                      "redirecionar="
                                                  )[1]
                                              }`,
                                    editProfile,
                                }),
                            loginInvalid
                        )}
                    >
                        {showIconLoading ? (
                            <LoadingIcons.SpinningCircles
                                color="#fff"
                                alignmentBaseline="central"
                                height={30}
                            />
                        ) : !registerComponent ? (
                            "Entrar"
                        ) : !editProfile ? (
                            "Fazer cadastro"
                        ) : (
                            "Atualizar perfil"
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};
