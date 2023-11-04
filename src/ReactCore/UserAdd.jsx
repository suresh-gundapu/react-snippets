import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Services } from "../Services/Services";
let UserAdd = () => {
  let navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
  };
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Please Enter Name";
    }
    if (!values.email) {
      errors.email = "Please Enter Email";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.mobile) {
      errors.mobile = "Please Enter Mobile";
    } else if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(values.mobile)) {
      errors.mobile = "Ivalid Mobile Number";
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmiting }) => {
    (async () => {
      try {
        const formData = {
          Name: values.name,
          Email: values.email,
          Mobile: values.mobile,
        };
        let response = await Services.addUsers(formData);

        if (response.ok) {
          Swal.fire({
            title: "Success",
            icon: "success",
            text: "Data added",
          });
          navigate("/crudOperation");
        } else {
          throw new Error("Database Error");
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: error.message,
        });
      }
    })();
    setSubmiting(false);
  };
  return (
    <>
      <div className="header">
        <h1>User Add Form</h1>
      </div>
      <div className="main">
        <div className="formData">
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Name:</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
                <span className="error">
                  <ErrorMessage name="name" component="div" />
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Email:</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  id="email"
                  name="email"
                />
                <span className="error">
                  <ErrorMessage name="email" component="div" />
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <label className="form-label">Mobile:</label>
                <Field
                  type="text"
                  className="form-control"
                  placeholder="Mobile"
                  id="mobile"
                  name="mobile"
                />
                <span className="error">
                  <ErrorMessage name="mobile" component="div" />
                </span>
              </div>
              <div className="ms-4 ps-4 mt-2">
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserAdd;
