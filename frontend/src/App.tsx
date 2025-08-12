import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./page/app/profile";
import Order from "./page/app/order";
import NotFound from "./page/app/not-found";
import { MovNavBar, WebNavBar } from "./components/nav-bar";
import SignUp from "./page/auth/signup";

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
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
