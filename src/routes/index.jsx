import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ChatWidget from "../components/chat";

const ProtectedRoutes = () => {
    return (
      <>
       <ChatWidget/>
        <Routes>
            {/* <Route element={<ChatWidget />}> */}
                <Route index element={<Home />} />
            {/* </Route> */}
        </Routes>
      </>
    );
};
export default ProtectedRoutes;
