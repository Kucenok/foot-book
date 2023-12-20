import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";
import Qoute from "../components/Quote";
import ChiefPage from "../components/ChiefPage";


export default function Home(){
    return (
        <div>
            <HeroSection />
            <Skills />
            <Qoute/>
            <ChiefPage />
        </div>
    )
}