import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import SuccessfulAlert from '../components/ToastSuccess';
import axios from 'axios';
import router from 'next/router';
import FormRow from '../components/FormRow';

import { NextPage } from 'next/types';
import SubmitButton from '../components/SubmitButton';
import FormError from '../components/ValidationError';

const validationSchema = Yup.object().shape({
  username: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required(),
  userConsent: Yup.boolean().oneOf([true], 'Accept Terms & Conditions is required').required(),
});

const LoginForm: NextPage = () => {
  const [alert, setAlert] = useState(false);

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values) => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: new URLSearchParams({
            username: values.username,
            password: values.password,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.info(res);
          });
        // axios
        //   .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, convertedDataToJson, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //   .then((response) => {
        //     setAlert(true);
        //     setTimeout(
        //       () =>
        //         router.push({
        //           pathname: '/registerForm',
        //           query: { id: response.data.id },
        //         }),
        //       5000,
        //     );
        //   })
        //   .catch(function (error) {
        //     console.error('Error', error.message);
        //   });
      }}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => (
        <div className="grid place-items-center">
          {alert && (
            <SuccessfulAlert
              registrationStatus="Signed up"
              message="You will now be redirected to the login page."
            ></SuccessfulAlert>
          )}
          <h1 className="p-3 text-4xl font-bold text-fuchsia-600 main-title md:text-5xl">Nova</h1>
          <div className="flex pt-0 bg-gray-bg1">
            <div className="w-full max-w-md px-16 py-10 m-auto bg-white border rounded-lg border-primaryBorder">
              <h1 className="mt-4 mb-12 text-2xl font-medium text-center text-primary">Login</h1>
              <form onSubmit={handleSubmit}>
                <FormRow>
                  <label>Username</label>
                  <Field
                    name="username"
                    type="text"
                    className="w-full p-2 mb-4 text-sm border rounded-md outline-none text-primary form-control "
                  />
                  <ErrorMessage name="username">
                    {(msg) => <FormError message={msg}></FormError>}
                  </ErrorMessage>
                </FormRow>
                <FormRow>
                  <label>Password</label>
                  <Field
                    name="password"
                    label="password"
                    type="password"
                    className="w-full p-2 mb-4 text-sm border rounded-md outline-none text-primary form-control "
                  />
                  <ErrorMessage name="password">
                    {(msg) => <FormError message={msg}></FormError>}
                  </ErrorMessage>
                </FormRow>
                <SubmitButton buttonText="Login"></SubmitButton>
              </form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default LoginForm;
