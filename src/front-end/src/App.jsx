import { Routes, Route } from "react-router-dom";
import Home from "@/routes/Home";
import Status from "@/routes/Status";
import NotFound from "@/routes/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path={"status"} element={<Status />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
