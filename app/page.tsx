import { MainPage } from "@/components/pages/mainPage";
import { InfoPage } from "@/components/pages/InfoPage";
import { OurTeamPage } from "@/components/pages/OurTeamPage";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center overflow-x-hidden">
      <MainPage />
      <InfoPage />
      <OurTeamPage />
    </section>
  );
}
