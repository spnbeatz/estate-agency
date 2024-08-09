"use client";
import { Page } from "./Page";
import { ImageWrapper } from "../atoms/ImageWrapper";
import Image from "next/image";
import InfoImage from '@/public/info-photo.jpg';
import siteText from "@/config/text.json";
import { PageText } from "../atoms/pageText";

export const InfoPage = () => {

    const text = siteText.info;
    return (
        <Page>
            <ImageWrapper width="100%" height="100%" className="absolute right-0 opacity-100">
  
                <Image src={InfoImage} alt="background image"/>
            </ImageWrapper>
            <div 
                className="absolute h-full w-2/5 bg-neutral-900 left-0 z-10 flex flex-col items-center justify-center"
                style={{
                    clipPath: 'polygon(0 0, 70% 0, 100% 100%, 0% 100%)'
                }}
            >
                <div className="flex flex-col items-center justify-center -ml-28 gap-2">
                    <p className={`text-xl uppercase text-white font-semibold josefin_sans tracking-widest opacity-90 leading-normal`} style={{width: '50%'}}>
                        {text.leftPanel.title}
                    </p>
                    {text.leftPanel.description.map((text, index) => {
                        return text.map((desc, index) => {
                            return (
                                <p key={index} className={`text-white opacity-90 leading-relaxed ${index === 0 ? "font-semibold text-medium" : "font-thin text-sm"}`} style={{width: '50%'}}>{desc}</p>
                            )
                        })
                    })}
                    
                </div>
            </div>
            <div 
                className="absolute h-2/3 w-1/2 bg-neutral-900 right-0 z-10 flex flex-col items-center justify-center gap-12"
                style={{
                    clipPath: 'polygon(12% 0, 100% 0, 100% 100%, 30% 100%)'
                }}
            >
                <PageText 
                    title={text.rightPanel.mission.title}
                    description={text.rightPanel.mission.description}
                    width="50%"
                    className="-mr-32 text-right"
                />
                <PageText
                    title={text.rightPanel.invitation.title}
                    description={text.rightPanel.invitation.description}
                    width="50%"
                    className="-mr-32 text-right"
                /> 
            </div>
        </Page>
    )
}