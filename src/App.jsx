import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { useEffect, useState } from "react";
import AOS from 'aos';

function App() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    AOS.init({
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: true,
      disable: 'backfill',
      delay: 200,
      duration: 600,
      once: false,
      mirror: false,
      offset: 50,
      easing: 'ease-in-out-sine',
      loadingDuration: 200,
      optional: true,
    });

    setDomLoaded(true);

  }, []);


  
  if (!domLoaded) {
    return null;
  }


  if (typeof window === "undefined") {
    return <></>;
  } else {

    return (
    <main className="main-parent">
    <RouterProvider router={router} /> 
   </main>);
  }


}

export default App
