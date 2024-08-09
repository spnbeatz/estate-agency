"use client";
import { HomeOutline, Home } from 'react-ionicons';

export const Logo = () => {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="relative w-14 h-9">
                <div className='absolute w-8 h-8 right-0 top-0'>
                    <Home width={"20px"} height={"20px"} color={"rgb(50, 50, 50)"}/>
                </div>
                <div className='absolute w-8 h-8 left-0 bottom-1'>
                    <Home width={"30px"} height={"30px"} color={"rgb(50, 50, 50)"}/>
                </div>

                
                
            </div>
            
            <p className="text-xl font-semibold text-neutral-800 h-9 flex flex-col justify-center">Prime Estate</p>
        </div>
    )
}