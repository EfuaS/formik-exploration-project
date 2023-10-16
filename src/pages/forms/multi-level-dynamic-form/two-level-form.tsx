import { Button, Typography } from "@mui/material";
import { Field, FieldArray, Form, Formik } from "formik";
import Link from "next/link";
import React from "react";

export default function TwoLevelForm() {
  const formInitialValues = {
    persons: [
      {
        firstName: "",
        lastName: "",
        age: 0,
        interest: "",
        hobbies: [{ name: "", why: "" }],
      },
    ],
  };
  // TODO: validation with formik and error handling
  return (
    <div>
      <Typography variant="h4">Two Level Dynamic Form</Typography>
      <Link href={"/"}>
        <Typography>Go home </Typography>
      </Link>

      <div>
        <Formik
          initialValues={formInitialValues}
          onSubmit={(values) => console.log(values)}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="persons">
                {({ push, remove }) => (
                  <>
                    {values.persons.map((person, index: number) => (
                      <div key={index}>
                        <Field
                          placeholder="First name"
                          name={`persons.${index}.firstName`}
                        />{" "}
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
                        <div>
                          <FieldArray name={`persons.${index}.hobbies`}>
                            {({ push, remove }) => (
                              <>
                                {person.hobbies.map(
                                  (hobbyItem, hobbyIndex: number) => (
                                    <div key={hobbyIndex}>
                                      <Field
                                        placeholder="Hobby name"
                                        name={`persons.${index}.hobbies.${hobbyIndex}.name`}
                                      />{" "}
                                      <Field
                                        placeholder="Why this hobby?"
                                        name={`persons.${index}.hobbies.${hobbyIndex}.why`}
                                      />{" "}
                                      <p onClick={() => remove(hobbyIndex)}>
                                        remove hobby
                                      </p>
                                    </div>
                                  )
                                )}
                                <Button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    push({
                                      name: "",
                                      why: "",
                                    });
                                  }}
                                  variant="outlined"
                                >
                                  Add hobby
                                </Button>
                              </>
                            )}
                          </FieldArray>
                        </div>
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
                          hobbies: [{ name: "", why: "" }],
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
