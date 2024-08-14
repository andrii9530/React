import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const LoginSchema = Yup.object().shape({
    login: Yup.string().required('Обов’язкове поле'),
    password: Yup.string().required('Обов’язкове поле'),
  });

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        //Просто вивожу те що увів користувач
        console.log('Логін:', values.login);
        console.log('Пароль:', values.password);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <Field 
              type="text" 
              name="login" 
              placeholder="Логін" 
            />
            <ErrorMessage name="login" component="div" />
          </div>
          <div>
            <Field 
              type="password" 
              name="password" 
              placeholder="Пароль" 
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Готово
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;

