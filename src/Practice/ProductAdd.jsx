import { Field, Formik, Form, ErrorMessage } from "formik";
import React, { useState, useEffect } from "react";
import { Services } from "../Services/Services";
import Swal from "sweetalert2";

const ProductAdd = () => {
  let handleIntialValues = {
    name: "",
    cat: "",
    price: "",
  };
  let handleValidate = (values) => {
    let errors = {};

    if (!values.name) {
      errors.name = " required";
    }

    if (!values.price) {
      errors.price = " required";
    }

    if (!values.cat) {
      errors.cat = " required";
    }
    return errors;
  };
  let handleSubmit = (values, { setSubmitting }) => {
    (async () => {
      try {
        var formData = {
          name: values.name,
          price: values.price,
          cat: values.cat,
        };
        var response = await Services.addProducts(formData);
        if (response.ok) {
          Swal.fire({
            icon: "success",
            text: "Successfully added",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "something went wromng",
          });
        }
        setSubmitting(false);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <div className="header"> Product Add</div>
      <div className="main formData">
        <Formik
          initialValues={handleIntialValues}
          validate={handleValidate}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-floating mb-3">
              <Field
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder=" "
                name="name"
              />
              <label htmlFor="floatingInput">Product Name</label>
            </div>
            <span className="error">
              <ErrorMessage name="name"></ErrorMessage>
            </span>
            <div className="form-floating mb-3">
              <Field
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder=" "
                name="cat"
              />
              <label htmlFor="floatingInput">Category</label>
            </div>
            <span className="error">
              <ErrorMessage name="name"></ErrorMessage>
            </span>
            <div className="form-floating mb-3">
              <Field
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder=" "
                name="price"
              />
              <label htmlFor="floatingInput">Price</label>
            </div>
            <span className="error">
              <ErrorMessage name="name"></ErrorMessage>
            </span>
            <div className="mb-3">
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ProductAdd;
