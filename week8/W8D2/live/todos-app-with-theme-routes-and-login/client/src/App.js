import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Custom404Page } from "./components/Custom404Page";
import { Home } from "./components/Home";
import { LayoutComponent } from "./components/LayoutComponent";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { TodoList } from "./components/TodoList";
import { getCsrfToken } from "./consts";

export default function App() {
  useEffect(() => {
    getCsrfToken();
  }, []);
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<Home />} />
        <Route path="/todos">
          <Route index element={<TodoList />} />
          {/* <Route path="edit/:id" element={<EditTodo />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Custom404Page />} />
      </Route>
    </Routes>
  );
}
