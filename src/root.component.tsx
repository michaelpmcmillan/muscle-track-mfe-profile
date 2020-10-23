import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Helmet from "react-helmet";
import { Formik } from "formik";
import { ValidationSchema } from "./validation";
import { FORM, BUTTON, FORM_GROUP } from "./styles";
import getProfile from "./services/get-profile-service";

export default function Root(props) {
  const [profile, setProfile] = useState({ height: 0, dateOfBirth: "" });

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  return (
    <Formik
      initialValues={profile}
      validationSchema={ValidationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setTimeout(() => {
          setSubmitting(true);
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 1000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <FORM onSubmit={handleSubmit}>
          <Helmet>
            <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
              integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
              crossOrigin="anonymous"
            ></link>
          </Helmet>

          <FORM_GROUP>
            <Form.Label>Height (cm)</Form.Label>
            <Form.Control
              name="height"
              type="text"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.height}
              className={touched.height && errors.height ? "error" : null}
            />
            <Form.Text className="text-muted">
              Make sure you're standing up straight!
            </Form.Text>
            {touched.height && errors.height ? (
              <div className="error-message">{errors.height}</div>
            ) : null}
          </FORM_GROUP>

          <FORM_GROUP>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              name="dateOfBirth"
              type="date"
              placeholder=""
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateOfBirth}
              className={
                touched.dateOfBirth && errors.dateOfBirth ? "error" : null
              }
            />
            <Form.Text className="text-muted">
              This is used to help calculate your BRM, RMR and your kcal RDA!
            </Form.Text>
            {touched.dateOfBirth && errors.dateOfBirth ? (
              <div className="error-message">{errors.dateOfBirth}</div>
            ) : null}
          </FORM_GROUP>

          <FORM_GROUP>
            <BUTTON variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Please wait..." : "Ok"}
            </BUTTON>
          </FORM_GROUP>
        </FORM>
      )}
    </Formik>
  );
}
