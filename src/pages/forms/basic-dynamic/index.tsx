import { BasicFormModel } from "@/src/models/NameAgeDataModel";
import { Button, Typography } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

const InsiderFieldComp = ({
  index,
  name,
  placeholder,
}: {
  index: number;
  name: string;
  placeholder: string;
}) => {
  return (
    <Field
      placeholder={placeholder}
      sx={{
        margin: "10px",
      }}
      name={`persons.${index}.${name}`}
    />
  );
};

export default function BasicDynamicForm() {
  const formInitialValues = {
    persons: [{ firstName: "", lastName: "", age: 0, interest: "" }],
  };

  return (
    <div className=" bg-red-500 p-6">
      <Typography variant="h4">Basic One Level Dynamic Form</Typography>
      <Link href={"/"}>
        <Typography>Go home </Typography>
      </Link>
      <div>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {({ values, resetForm }) => (
            <Form>
              <FieldArray name="persons">
                {({ remove, push }) => (
                  <>
                    {values.persons.map((person, index) => (
                      <div key={index}>
                        {/* Advance */}
                        <InsiderFieldComp
                          index={index}
                          name={"firstName"}
                          placeholder={"First Name"}
                        />
                        <Field
                          placeholder="Last name"
                          name={`persons.${index}.lastName`}
                        />{" "}
                        <Field
                          placeholder="Age"
                          name={`persons.${index}.age`}
                        />{" "}
                        <Field
                          name={`persons.${index}.interest`}
                          label="Interests"
                        />
                        <p onClick={() => remove(index)}>X</p>
                      </div>
                    ))}
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        push({
                          firstName: "",
                          lastName: "",
                          age: 0,
                          interest: "",
                        });
                      }}
                      variant="outlined"
                    >
                      Add person
                    </Button>
                  </>
                )}
              </FieldArray>
              <Button type="submit" variant="outlined">
                Submit
              </Button>
              <Button onClick={() => resetForm()} variant="outlined">
                Clear
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
