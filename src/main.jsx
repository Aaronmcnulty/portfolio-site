import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProjectDisplay from './components/projectDisplay/ProjectDisplay.jsx'
import AboutMeSection from './components/aboutMe/AboutMeSection.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "projects", element: <ProjectDisplay /> },
      { path: "about", element: <AboutMeSection /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
