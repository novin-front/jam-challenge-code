import * as Yup from 'yup';
import { regexPassword } from '../functions/index';
import { LoginFormValues } from '../types/UserType/index';
export const schemaLogin = Yup.object().shape({
  username: Yup.string()
    .required("شناسه کاربری الزامی است")
    .min(6, "شناسه کاربری وارد شده اشتباه است"),
  password: Yup.string()
    .required("کلمه عبور الزامی است")
    .matches(regexPassword, { message: "کلمه عبور وارد شده اشتباه است" }),
});
export const loginApiCall = (formData : LoginFormValues): Promise<any>  => {
  return fetch("http://localhost:9000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }).then((response) => response.json());
};
export const logoutSite = (): Promise<any>  => {
  return fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((response) => response.json());
};