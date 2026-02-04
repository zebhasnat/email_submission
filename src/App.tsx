import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Contact } from "./screens/Contact";
import { MySite } from "./screens/MySite";
import { SubmittedForm } from "./screens/SubmittedForm";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MySite />,
  },
  {
    path: "/mysite",
    element: <MySite />,
  },
  {
    path: "/submitted-form",
    element: <SubmittedForm />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
