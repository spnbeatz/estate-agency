"use client"
import Image from "next/image"
import { ImageWrapper } from "../atoms/ImageWrapper"
import BackgroundImage from '@/public/main-page-photo.jpg';
import { TitleElement } from "../atoms/TitleElement";

export const TitleComponent = () => {
    return (
        <div className="w-full bg-red-200 h-2/3 relative">
            <TitleElement />
            <ImageWrapper width="65%" height="100%" className="absolute right-0">
  
                <Image src={BackgroundImage} alt="background image"/>
            </ImageWrapper>
        </div>
    )
}