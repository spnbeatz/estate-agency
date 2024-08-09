"use client";
import React from "react";

export const Page = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="w-screen h-screen relative flex flex-col justify-center items-center">
            {children}
        </div>
    )
}