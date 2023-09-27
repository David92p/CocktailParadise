import { BrowserRouter } from "react-router-dom";
import Navbar from "./shared/components/navbar/Navbar";
import RoutesNav from "./shared/components/navbar/RoutesNav";
import Footer from "./shared/components/footer/Footer";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <RoutesNav></RoutesNav>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
};

export default App;
