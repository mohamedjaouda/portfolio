import { lazy, Suspense } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Hero from './comps/Hero'
import Spinner from "./ui/spinner";


function App() {

  const Work = lazy(() => import("./comps/Work"));
  const About = lazy(() => import("./comps/About"));
  const Contact = lazy(() => import("./comps/Contact"));

  return (
    <div className="scrollbar">
      <ParallaxProvider>
        <Hero />
      </ParallaxProvider>
      <Suspense fallback={<Spinner />}>
        <About />
        <Work />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
