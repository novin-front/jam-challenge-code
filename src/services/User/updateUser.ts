import * as Yup from 'yup';
import { regexEmail } from '../functions/index';
import { useQueryParmsDataType, initInputValues } from '../types/UserType/index';
export const schemaUpdateUser = Yup.object().shape({
    userName: Yup.string()
      .required("شناسه کاربری الزامی است")
      .min(6, "شناسه کاربری وارد شده اشتباه است"),
    fullName: Yup.string()
      .required("نام و نام خاونوادگی الزامی است")
      .min(6, "نام و نام خاونوادگی اشتباه است "),
    address: Yup.string().min(6, { message: "آدرس وارد شده اشتباه است" }),
    email: Yup.string()
      .required("ایمیل الزامی است")
      .matches(regexEmail, { message: "ایمیل وارد شده اشتباه است" }),
  });
  export const updateApiCall = (formData :initInputValues): Promise<any>  => {
    console.log("updateApiCall formData =>",formData)
      return fetch("http://localhost:9000/api/v1/auth/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).then((response) => response.json());
  };
  
  export const getUserDetailsById = async (parms: useQueryParmsDataType): Promise<any>  => {
      console.log("getUserDetailsById parms =>",parms)
      let { queryKey } = parms;
      let id = queryKey?.length  ? queryKey[1] : ""
        return await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then((response) => response.json())
        .catch( (error) =>{
          return error;
        });
  };