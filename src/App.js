import React from "react";

import { Routes, Route } from "react-router-dom";
import Task1 from "./ReactCore/Task1";
import Task3 from "./ReactCore/Task3";
import Task4 from "./ReactCore/Task4";
import Task2 from "./ReactCore/Task2";
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
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} >
              <Route path="task1" element={<Task1 />} />
              <Route path="task3" element={<Task3 />} />
              <Route path="task4" element={<Task4 />} />
              <Route path="task6" element={<Task6 />} />
              <Route path="task7" element={<Task7 />} />
              <Route path="usersList" element={<UsersList/>}/>
              <Route path="todoList" element={<ToDoList/>}/>
              <Route path="userAlbums" element={<UserAlbums/>} />
              <Route path="userAlbumsDetails/:id" element={<UserAlbumsDetails/>}/>
              <Route path="crudOperation" element={<CrudOperation/>}/>
              <Route path="userAdd" element={<UserAdd/>}/>
              <Route path="userEdit/:id" element={<UserEdit/>}/>
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
