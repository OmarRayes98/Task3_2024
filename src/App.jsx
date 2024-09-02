import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { useEffect } from "react";
import AOS from 'aos';

function App() {

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
  }, []);


  return (
    <main className="main-parent">
     <RouterProvider router={router} /> 
    </main>
  )
}

export default App
