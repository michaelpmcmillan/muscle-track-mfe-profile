import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  height: Yup.number().min(55).max(275).required("Height is required."),
  dateOfBirth: Yup.date()
    .min("1900-01-01")
    .max("2100-01-01")
    .required("Date of birth is required."),
});
