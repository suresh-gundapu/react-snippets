import React, { useState } from "react";
import Task6Child from "./Task6Child";
let Task6 = () => {
  let [users, setUsers] = useState([
    {
      "id": 1,
      "name": "Suresh",
      "location": "Warangal",
      "pic": "https://media.istockphoto.com/id/1307615661/photo/smiling-indian-business-man-working-on-laptop-at-home-office-young-indian-student-or-remote.webp?b=1&s=612x612&w=0&k=20&c=vakiaULafyfDOTKfO8XQ8m7bIhQ4ml_meJs7yN3TVgE=",
      "status": "Active"
    },
    {
      "id": 2,
      "name": "Ganapathi",
      "location": "Rajamandri",
      "pic": "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_640.jpg",
      "status": "Active"
    }
  ])
  return (
    <Task6Child userData={users} />

  )
}
export default Task6;