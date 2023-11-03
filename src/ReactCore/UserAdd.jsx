import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
let UserAdd = () => {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
  };
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.mobile) {
      errors.mobile = "Required";
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmiting }) => {
    console.log(values);
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
