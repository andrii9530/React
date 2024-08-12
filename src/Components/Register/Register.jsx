import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const LoginSchema = Yup.object().shape({
    Name: Yup.string().required('Напишіть Ваше Імя'),
    LastName: Yup.string().required('Напишіть Ваше Призвище'),
    login: Yup.string().required('Напишіть Логін'),
    password: Yup.string().required('Придумайте пароль'),
    RepeatPassword: Yup.string().required('Повторіть пароль'),
  });


  return (
    <Formik
      initialValues={{Name: '',LastName: '',login: '',password: '',  RepeatPassword: '' }}
      validationSchema={LoginSchema}
      onSubmit={values => {
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
              placeholder="Name" 
              />
            <ErrorMessage name="Name" component="div" />
      </div>
      <br></br>
      <div>
            <Field 
              type="text" 
              name="LastName" 
              placeholder="LastName" 
            />
            <ErrorMessage name="LastName" component="div" />
      </div>
      <br></br>
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
      <br></br>
      <div>
            <Field 
              type="password" 
              name="Repeatpassword" 
              placeholder="RepeatPassword" 
              />
            <ErrorMessage name="Repeatpassword" component="div" />
      </div>
      
      <br></br>
      <button type="submit" disabled={isSubmitting}>
            Зареєструватись
          </button>
    </Form>
    )}
    </Formik>
  );
};

export default Register;

};

export default Register;
