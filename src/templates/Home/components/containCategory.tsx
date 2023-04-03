import React from "react";

import { ICategoryApi } from "@/interface";

export const ContainCategory: React.FC<{ data: ICategoryApi }> = ({ data }) => (
    <div className="w-24 h-26 flex flex-col justify-between">
        <p>{data.name}</p>
        <img src={data.image} alt="imagem categoria" className="w-20 h-20"  />
    </div>
);
