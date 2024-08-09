"use client";
import React from "react";

export const ImageWrapper = (
    {
        children, 
        width, 
        height,
        className
    }
    : 
    {
        children: React.ReactNode,
        width: string,
        height: string,
        className?: string
    }
) => {
    return (
        <div className={`overflow-hidden flex justify-center items-center ${className}`} style={{width, height}}>
            {children}
        </div>
    )
}