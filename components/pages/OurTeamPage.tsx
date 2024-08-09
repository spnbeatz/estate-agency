"use client";
import { Page } from "./Page";
import TeamImage from '@/public/team-photo.jpg'
import { ImageWrapper } from "../atoms/ImageWrapper";
import Image from "next/image";
import siteText from '@/config/text.json';
import { PageText } from "../atoms/pageText";

export const OurTeamPage = () => {

    const text = siteText.team;

    return (
        <Page>
            <ImageWrapper width="100%" height="100%" className="absolute right-0 opacity-100">
  
                <Image src={TeamImage} alt="background image"/>
            </ImageWrapper>
            <div 
                className="absolute h-full bg-neutral-900 left-0 z-10 flex flex-col items-center justify-center gap-14"
                style={{
                    clipPath: 'polygon(0 0, 70% 0, 93% 100%, 0% 100%)',
                    width: '57.1%'
                }}
            >
                <PageText title={text.title} description={text.description} width="37%" className="-ml-72" />
                <div className="flex flex-col items-center justify-center -ml-72 gap-2">
                    <p className={`text-xl uppercase text-white font-semibold josefin_sans tracking-widest opacity-90 leading-normal`} style={{width: '38%'}}>
                        Specjalizacje
                    </p>
                    {text.specs.map((text, index) => {
                        return text.map((desc, index) => {
                            return (
                                <p key={index} className={`text-white opacity-90 ${index === 0 ? "font-semibold text-medium" : "font-thin text-sm"}`} style={{width: '38%'}}>{desc}</p>
                            )
                        })
                    })}
                    
                </div>
            </div>
        </Page>
    )
}