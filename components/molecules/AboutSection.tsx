"use client";
import { ImageWrapper } from "../atoms/ImageWrapper";
import Image from "next/image";
import AboutImage from '@/public/about-photo.jpg';
import siteText from "@/config/text.json";

export const AboutSection = () => {
    return (
        <div className="w-full relative flex flex-col justify-center items-center" style={{
            height: 'calc(100% - (66.66% + 64px))'
        }}>
            <ImageWrapper width="100%" height="100%" className="absolute right-0 opacity-10">
  
                <Image src={AboutImage} alt="background image" className="mt-56"/>
            </ImageWrapper>
            <p className="text-lg font-bold">{siteText.about.title}</p>
            <p className="w-2/3 text-center text-xs">{siteText.about.description}</p>
        </div>
    )
}