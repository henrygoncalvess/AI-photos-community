import { Routes, Route } from "react-router-dom";
import Home from "@/routes/Home";
import Status from "@/routes/Status";
import SignIn from "@/routes/SignIn";
import Login from "@/routes/Login";
import Gallery from "@/routes/Gallery";
import NotFound from "@/routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"status"} element={<Status />} />
        <Route path={"signin"} element={<SignIn />} />
        <Route path={"login"} element={<Login />} />
        <Route path={"community/gallery"} element={<Gallery />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
