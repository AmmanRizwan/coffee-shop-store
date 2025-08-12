import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./page/profile";
import Order from "./page/order";
import NotFound from "./page/not-found";
import { MovNavBar, WebNavBar } from "./components/nav-bar";

function App() {
  return (
    <>
    <BrowserRouter>
    <WebNavBar />
    <MovNavBar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
