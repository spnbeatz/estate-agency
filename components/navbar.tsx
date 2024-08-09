"use client";
import { Logo } from "./atoms/Logo";
import { Navigation } from "./navigation";

export const Navbar = () => {
    return (
        <div className="w-full h-16 bg-white flex flex-row items-center justify-between px-24">
            <Logo />
            <Navigation />
        </div>
    )
}