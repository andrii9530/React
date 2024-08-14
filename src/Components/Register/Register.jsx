import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const LoginSchema = Yup.object().shape({
    Name: Yup.string().required('Обов’язкове поле'),
    LastName: Yup.string().required('Обов’язкове поле'),
    login: Yup.string().required('Обов’язкове поле'),
    password: Yup.string().required('Обов’язкове поле'),
    RepeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Паролі повинні співпадати')
    .required('Обов’язкове поле'),
  });


  return (
    <Formik
      initialValues={{Name: '',LastName: '',login: '',password: '',  RepeatPassword: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
        //Просто вивожу те що увів користувач
        console.log('Імя:', values.Name);
        console.log('Призвище:', values.LastName);
        console.log('Логін:', values.login);
        console.log('Пароль:', values.password);
        console.log('Повторний пароль:', values.RepeatPassword);
      }}
    >

    {({ isSubmitting }) => (
      <Form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <Field 
              type="text" 
              name="Name" 
              placeholder="Ім’я" 
            />
            <ErrorMessage name="Name" component="div" />
          </div>
          <div>
            <Field 
              type="text" 
              name="LastName" 
              placeholder="Прізвище" 
            />
            <ErrorMessage name="LastName" component="div" />
          </div>
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
          <div>
            <Field 
              type="password" 
              name="RepeatPassword" 
              placeholder="Повторний пароль" 
            />
            <ErrorMessage name="RepeatPassword" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting}>
            Зареєструватись
          </button>
    </Form>
    )}
    </Formik>
  );
};

export default Register;
