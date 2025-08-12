import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./page/profile";
import { MovNavBar, WebNavBar } from "./components/nav-bar";

function App() {
  return (
    <>
    <BrowserRouter>
    <WebNavBar />
    <MovNavBar />
      <Routes>
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
