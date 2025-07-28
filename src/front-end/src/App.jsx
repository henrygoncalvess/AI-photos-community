import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Status from "@/pages/Status";
import SignIn from "@/pages/SignIn";
import Login from "@/pages/Login";
import Gallery from "@/pages/Gallery";
import NotFound from "@/pages/NotFound";
import ImageRequest from "@/pages/ImageRequest";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"status"} element={<Status />} />
        <Route path={"signin"} element={<SignIn />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"image-request"} element={<ImageRequest />} />
        <Route path={"community/gallery"} element={<Gallery />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
