import React, { useState } from "react";

const Task5 = () => {
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
    <div className="text-center">
      <div className="card shadow my-2">
        <div className="card-header">
          <h1 className="text-danger">
            Basic Example Of useState - Users Listing
          </h1>
        </div>
        <div className="card-body">
         

        </div>
      </div>
    </div>
  )
}

export default Task5;