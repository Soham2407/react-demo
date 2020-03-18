import React from "react";
import { Formik, Form } from "formik";
import {
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Radio,
  Typography,
  Checkbox
} from "@material-ui/core";
import * as Yup from "yup";

export default function FormikApp() {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          gender: "Male",
          graduate: false
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          //let data = JSON.stringify(values);
          //console.log(data);
          setTimeout(() => {
            actions.resetForm();
          }, 3000);
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .label("Name")
            .required(),
          email: Yup.string()
            .label("Email")
            .email()
            .required(),
          password: Yup.string().required(),
          gender: Yup.string()
            .oneOf(["Male", "Female", "Other"])
            .required(),
          graduate: Yup.boolean().required()
        })}
      >
        {formikProps => {
          console.log(formikProps);

          return (
            <Form style={{ padding: 30 }}>
              <Typography variant="h3" gutterBottom>
                Form
              </Typography>
              <TextField
                label="Name"
                placeholder="Enter name"
                value={formikProps.values.name}
                name="name"
                onChange={formikProps.handleChange}
                onBlur={formikProps.handleBlur}
                error={formikProps.touched.name && !!formikProps.errors.name}
                helperText={formikProps.touched.name && formikProps.errors.name}
              />
              <div style={{ marginTop: 20 }}>
                <TextField
                  label="Email"
                  placeholder="Enter email"
                  value={formikProps.values.email}
                  name="email"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                  error={
                    formikProps.touched.email && !!formikProps.errors.email
                  }
                  helperText={
                    formikProps.touched.email && formikProps.errors.email
                  }
                />
              </div>

              <div style={{ marginTop: 20 }}>
                <TextField
                  label="Password"
                  type="password"
                  placeholder="Enter password"
                  value={formikProps.values.password}
                  name="password"
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
              </div>

              <div style={{ marginTop: 20 }}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  name="gender"
                  value={formikProps.values.gender}
                  onChange={formikProps.handleChange}
                >
                  <FormControlLabel
                    value="Female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </div>

              <div>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="graduate"
                      onChange={formikProps.handleChange}
                      value={formikProps.values.graduate}
                    />
                  }
                  label="Graduate"
                />
              </div>

              <div style={{ paddingTop: 20 }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={formikProps.isSubmitting}
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
