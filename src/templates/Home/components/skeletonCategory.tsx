import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonCategory: React.FC = () => (
    <SkeletonTheme>
        <div className="flex flex-col">
            <p>
                <Skeleton
                    count={1}
                    className="w-20"
                    containerClassName="flex flex-col items-center"
                />
            </p>
            <div className="w-20 h-20">
                <Skeleton
                    className="w-20 h-20"
                    containerClassName="w-[100%] h-[100%] flex justify-center"
                />
            </div>
        </div>
    </SkeletonTheme>
);
