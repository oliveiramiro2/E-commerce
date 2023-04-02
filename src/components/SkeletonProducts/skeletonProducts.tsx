import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const SkeletonProducts: React.FC = () => (
    <div className="w-[28%] max-md:w-[80%]">
        <SkeletonTheme>
            <p>
                <Skeleton
                    count={1}
                    className="w-[70%]"
                    containerClassName="flex flex-col items-center"
                />
            </p>
            <div className="w-[100%] h-[35vh] max-md:h-[300px]">
                <Skeleton
                    className="w-[90%] h-[95%]"
                    containerClassName="w-[100%] h-[95%] flex justify-center"
                />
            </div>
            <p>
                <Skeleton
                    count={1}
                    className="w-[70%]"
                    containerClassName="flex flex-col items-center"
                />
            </p>
        </SkeletonTheme>
    </div>
);
