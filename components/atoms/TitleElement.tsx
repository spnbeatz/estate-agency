'use client';

import { fontSans } from "@/config/fonts";

export const TitleElement = () => {
    return (
        <div 
            className="absolute h-full w-1/2 bg-neutral-900 left-0 z-10 flex flex-col items-center justify-center"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0% 100%)'
            }}
        >
            <div className="flex flex-col items-center justify-center -ml-16">
                <p className={`text-xl uppercase text-white font-semibold josefin_sans tracking-widest opacity-90 leading-normal`} style={{width: '65%'}}>
                    Twój dom, Twoje zasady. My zajmiemy się resztą.
                </p>
                <p className="text-xs text-white opacity-90 uppercase font-thin" style={{width: '65%'}}>Profesjonalna pomoc w każdym kroku.</p>
            </div>

        </div>
    )
}