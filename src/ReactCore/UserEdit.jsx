import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { Services } from "../Services/Services";
import Swal from "sweetalert2";
let UserEdit = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let [userData, setUserData] = useState({
    Name: "",
    Email: "",
    Mobile: "",
  });
  const initialValues = {
    Name: userData.Name,
    Email: userData.Email,
    Mobile: userData.Mobile,
  };
  let checkValidation = (values) => {
    const errors = {};
    if (!values.Name) {
      errors.Name = "Please enter name";
    }
    if (!values.Email) {
      errors.Email = "Please enter email";
    }
    if (!values.Mobile) {
      errors.Mobile = "Please enter mobile";
    }
    return errors;
  };
  let handleSubmit = async (values, { setSubmiting }) => {
    let response = await Services.updateUsers(values, id);
    if (response.ok) {
      Swal.fire({
        title: "Update",
        icon: "success",
        text: "Updated",
      });
      navigate("/crudOperation");
    } else {
      Swal.fire({
        title: "Faile",
        icon: "error",
        text: "DB Error",
      });
    }
    setSubmiting(false);
  };
  useEffect(() => {
    (async () => {
      let response = await Services.getuserData(id);
      let userResponse = await response.json();
      setUserData({ ...userResponse });
    })();
  }, []);
  return (
    <>
      <div className="header">
        <h1>User Edit </h1>
      </div>
      <div className="main">
        <div className="formData">
          <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            validate={checkValidation}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Name:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="Name"
                  id="Name"
                  value={userData.Name}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <span className="error">
                  <ErrorMessage name="Name" component="div"></ErrorMessage>
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Email:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="Email"
                  id="Email"
                  value={userData.Email}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <span className="error">
                  <ErrorMessage name="Email" component="div"></ErrorMessage>
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Mobile:</label>
                <Field
                  className="form-control"
                  type="text"
                  name="Mobile"
                  id="Mobile"
                  value={userData.Mobile}
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      [e.target.name]: e.target.value,
                    });
                  }}
                />
                <span className="error">
                  <ErrorMessage name="Mobile" component="div"></ErrorMessage>
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <button type="submit" className="btn btn-primary">
                  Update
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserEdit;
