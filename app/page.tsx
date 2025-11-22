import Image from "next/image";
import Homee from "./components/home";
import About from "./components/about";
import Timeline from "./components/timeline";
import Judges from "./components/judges";
import Prizes from "./components/prizes";
import Sponsors from "./components/sponsors";
import Organiser from "./components/organiser";
import Faq from "./components/faq";
import Contact from "./components/contact";
import Team from "./components/organizer";
import Headeri from "./nav/header";
import Footeri from "./nav/footer";

export default function Home() {
  return (
   <>
    <header><Headeri></Headeri></header>
    <div><Homee/></div>
    <About></About>
    <Timeline></Timeline>
    <Judges></Judges>
    <Prizes></Prizes>
    <Sponsors></Sponsors>
    <Organiser></Organiser>
    <Faq></Faq>
    <Contact></Contact>
    <Team></Team>
    <footer><Footeri></Footeri></footer>
   </>
  );
}
