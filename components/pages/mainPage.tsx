"use client";
import { TitleComponent } from '../molecules/TitleComponent';
import { Navbar } from '../navbar';
import { AboutSection } from '../molecules/AboutSection';
import { Page } from './Page';

export const MainPage = () => {
    return (
        <Page>
            <Navbar />
            <TitleComponent />
            <AboutSection />
        </Page>
    )
}