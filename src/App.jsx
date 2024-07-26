import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

function App() {
  return (
    <>
      <div>
        <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <Benefits />
          <Collaboration />
          <Services />
          <Pricing />
          <Roadmap />
          <Footer />
        </div>
        <ButtonGradient />
      </div>
    </>
  );
}

export default App;

// 3 type's of bug found in Benefits, Collaboration, Header, Hero, Pricing, Roadmap, services components.

// type 1 : design file dosn't exesist
// solution: have to import design folder in the components folder from github

// type 2 : unknow property is given in the Header component
// solution: have to check the github

// type 3 : messed up in Roadmap component
// solution: have to check the github
