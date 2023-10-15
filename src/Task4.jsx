import React, { useState } from "react";
import Swal from "sweetalert2";

const Task4 = () => {
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
  let handleStatus = (status) => {
    alert(status)
    if (status === "Active") {

    }
  }
  let handleDelete = (id) => {
    let result = Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if (result.isConfirmed) {
        let latetData = users.filter((eachObj) => {
          return eachObj.id !== id
        });
        setUsers(latetData);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
    
      } 
    })


  }
  return (
    <div className="text-center">
      <div className="card shadow my-2">
        <div className="card-header">
          <h1 className="text-danger">
            Basic Example Of useState - Users Listing
          </h1>
        </div>
        <div className="card-body">
          <table className="table border">
            <thead>
              <tr>
                <th>
                  Sno
                </th>
                <th>
                  Name
                </th>
                <th>
                  Location
                </th>
                <th>
                  Image
                </th>
                <th>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((eachObj) => (
                  <tr key={eachObj.id}>
                    <td>
                      {eachObj.id}
                    </td>
                    <td>
                      {eachObj.name}
                    </td>
                    <td>
                      {eachObj.location}
                    </td>
                    <td>
                      <img src={eachObj.pic} alt="profile pic" style={{ width: 200 }} />
                    </td>
                    <td>
                      <button className="btn btn-success m-2" onClick={() => {
                        handleStatus(eachObj.status)
                      }}>{eachObj.status}</button>
                      <button className="btn btn-danger m-2" onClick={() => {
                        handleDelete(eachObj.id)
                      }}>X</button>

                    </td>
                  </tr>
                )
                )
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Task4;