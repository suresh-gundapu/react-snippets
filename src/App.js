import React from "react";
import { Routes, Route } from "react-router-dom";
import Task3 from "./ReactCore/Task3";
import Task4 from "./ReactCore/Task4";
// import Task2 from "./ReactCore/Task2";
import Task6 from "./ReactCore/Task6";
import Task7 from "./ReactCore/Task7";
import Navbar from "./Navbar";
import Home from "./ReactCore/Home";
import UsersList from "./ReactCore/UsersList";
import ToDoList from "./ReactCore/ToDoList";
import UserAlbums from "./ReactCore/UserAlbums";
import UserAlbumsDetails from "./ReactCore/UserAlbumsDetails";
import CrudOperation from "./ReactCore/CrudOperation";
import UserAdd from "./ReactCore/UserAdd";
import UserEdit from "./ReactCore/UserEdit";
import { lazy, Suspense } from "react";
import AccountFinal from "./Redux/Component/AccountFinal";
import UseRef1 from "./ReactCore/UseRef1";
import UseRef2 from "./ReactCore/UseRef2";
import UseMemo from "./ReactCore/UseMemo";
import ProductListing from "./Practice/ProductListing";
import ProductAdd from "./Practice/ProductAdd";
const Task1 = lazy(() => import("./ReactCore/Task1"));
const TodoListing = lazy(() => import("./Redux/Component/TodoListing"));

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="task1" element={<Task1 />} />
                <Route path="task3" element={<Task3 />} />
                <Route path="task4" element={<Task4 />} />
                <Route path="task6" element={<Task6 />} />
                <Route path="task7" element={<Task7 />} />
                <Route path="usersList" element={<UsersList />} />
                <Route path="todoList" element={<ToDoList />} />
                <Route path="userAlbums" element={<UserAlbums />} />
                <Route
                  path="userAlbumsDetails/:id"
                  element={<UserAlbumsDetails />}
                />
                <Route path="crudOperation" element={<CrudOperation />} />
                <Route path="userAdd" element={<UserAdd />} />
                <Route path="userEdit/:id" element={<UserEdit />} />
                <Route path="todoListRedux" element={<TodoListing />} />
                <Route path="accountAdd" element={<AccountFinal />} />
                <Route path="useRef1" element={<UseRef1 />} />
                <Route path="useRef2" element={<UseRef2 />} />
                <Route path="useMemo1" element={<UseMemo />} />
                <Route path="productListing" element={<ProductListing />} />
                <Route path="productAdd" element={<ProductAdd />} />

              </Route>
            </Routes>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
