import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ContactUs from "../pages/ContactUs/ContactUs";
import PropertiesDetails from "../pages/PropertiesDetails/PropertiesDetails";
import Properties from "../pages/Properties/Properties";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <MainLayout />
    ),
    children: [
      {
        index: true,
        element: (
            <Home />
        ),
      },
      {
        path:"properties",
        element: (
            <Properties />
        ),
      },
      {
        // يوجد احدهم بشكل افتراضي والبقية موجودين بحسب الكارد 
        //slug  اما كلمة افتراضية او رقم كارد
        path:"properties/:slug",
        element: (
            <PropertiesDetails />
        ),
      },
      {
        path:"contact-us",
        element: (
            <ContactUs />
        ),
      },
    ],
  },
]);


export default router;