import Hero from "./components/Hero";
import Clients from "./components/clients";
import Service from "./components/service";
import About from "./components/about";
import HappyClient from "./components/HappyClient";
import ChooseUs from "./components/ChooseUs";
import Testimonial from "./components/testimonial";
import Portfolio from "./components/portfolio";

export default function Home() {
  return (
    <>
    <Hero/>
    <Clients/>
    <Service/>
    <About/>
    <Portfolio/>
    <ChooseUs/>
    <Testimonial/>
    <HappyClient/>
    </>
  );
}