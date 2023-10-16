import { BasicFormModel } from "@/src/models/NameAgeDataModel";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Formik } from "formik";
import Link from "next/link";
import React from "react";

export default function BasicForm() {
  const formInitialValues: BasicFormModel = {
    firstName: "",
    lastName: "",
    age: 0,
    interest: "",
  };

  return (
    <div className=" bg-red-500 p-6">
      <Typography variant="h4">Basic Form</Typography>
      <Link href={"/"}>
        <Typography>Go home </Typography>
      </Link>
      <div>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values, actions) => {
            alert(values.firstName);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit} className="flex">
              <div>
                <TextField
                  variant="standard"
                  label="First name"
                  sx={{
                    margin: "10px",
                  }}
                  onChange={props.handleChange}
                  value={props.values.firstName}
                  name="firstName"
                />
                <TextField
                  variant="standard"
                  label="Last name"
                  sx={{
                    margin: "10px",
                  }}
                  name="lastName"
                  onChange={props.handleChange}
                  value={props.values.lastName}
                />{" "}
                <TextField
                  variant="standard"
                  label="Age"
                  sx={{
                    margin: "10px",
                  }}
                  name="age"
                  onChange={props.handleChange}
                  value={props.values.age}
                  inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                />{" "}
                <TextField
                  variant="standard"
                  sx={{
                    margin: "10px",
                  }}
                  onChange={props.handleChange}
                  value={props.values.interest}
                  label="Interests"
                  name="interest"
                />
              </div>
              <div className="flex flex-col">
                <Button type="submit" variant="outlined">
                  Submit
                </Button>
                <Button onClick={() => props.resetForm()} variant="outlined">
                  Clear
                </Button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
