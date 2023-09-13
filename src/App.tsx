import { HashRouter } from "react-router-dom";
import { RoutesConfig } from "./routes";

function App() {
 return (
  <>
   <HashRouter>
    <RoutesConfig />
   </HashRouter>
  </>
 );
}

export default App;
