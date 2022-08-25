import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Login from "../pages/login/index";
import Project from "../pages/project/index";
import TodoList from "../pages/todolist";

const configRoute = [
  { path: "/", component: App },
  { path: "login", component: Login },
  { path: "project", component: Project },
];
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {configRoute.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={`route-${route.path}-${index}`}
              path={route.path}
              element={<Component />}
            ></Route>
          );
        })}
        <Route path="todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
