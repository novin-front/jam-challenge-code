import * as Yup from 'yup';
import { initInputValues } from '../types/UserType/index';
import { regexPassword, regexEmail } from '../functions/index';
export const createApiCall = (formData: initInputValues) : Promise<any>  => {
  return fetch("http://localhost:9000/api/v1/auth/create-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then((response) => response.json());
};
export const schemaCreateUser = Yup.object().shape({
  userName: Yup.string()
    .required("شناسه کاربری الزامی است")
    .min(6, "شناسه کاربری وارد شده اشتباه است"),
  fullName: Yup.string()
    .required("نام و نام خاونوادگی الزامی است")
    .min(6, "نام و نام خاونوادگی اشتباه است "),
  address: Yup.string().min(6, { message: "آدرس وارد شده اشتباه است" }),
  password: Yup.string()
    .required("کلمه عبور الزامی است")
    .matches(regexPassword, { message: "کلمه عبور وارد شده اشتباه است" }),
  email: Yup.string()
    .required("ایمیل الزامی است")
    .matches(regexEmail, { message: "ایمیل وارد شده اشتباه است" }),
  gender: Yup.string().required("جنسیت الزامی است"),
});