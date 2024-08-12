import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  // Створення схеми валідації для логіну та паролю
  const LoginSchema = Yup.object().shape({
    login: Yup.string().required('Обов’язкове поле'),
    password: Yup.string().required('Обов’язкове поле'),
  });

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        // Дії після успішного заповнення форми
        console.log('Логін:', values.login);
        console.log('Пароль:', values.password);
      }}
    >
      {({ isSubmitting }) => (
       // Наші компоненти
        <Form>
          <div>
            <Field 
              type="text" 
              name="login" 
              placeholder="Login" 
            />
            <ErrorMessage name="login" component="div" />
          </div>
          <br />
          <div>
            <Field 
              type="password" 
              name="password" 
              placeholder="Password" 
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <br />
          <button type="submit" disabled={isSubmitting}>
            Готово
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
