import ErrorBoundary from "../components/ErrorBoundary";
import { Home } from "../pages/home";
import { Route, Routes } from "react-router-dom";

export function RoutesConfig() {
 const ROUTES = [
  {
   path: "*",
   component: <Home />,
   pageTitle: "React Dependent Multi Select",
  },
 ];

 return (
  <Routes>
   {ROUTES.map(route => (
    <Route
     key={route.path}
     path={route.path}
     element={route.component}
     errorElement={<ErrorBoundary />}
    />
   ))}
  </Routes>
 );
}
