import React from 'react';
import {Form, Formik, Field} from 'formik';
import Yup from 'yup';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import styles from './Login.css';
import {createContactRequest} from '../../actions/user';

const MyTextField = ({field, form, ...rest}) => {
  return (
    <div>
      <TextField {...field} {...rest} />
      <p className={styles.errorMessage}>
        {(form.touched[field.name] && form.errors && form.errors[field.name]) ? form.errors[field.name] : '\u00a0'}
      </p>
    </div>
  )
};

const App = (props) => {

  console.info(`Errors - `, props);
  return (
    <Formik
      initialValues={{email: '', password: '', username: ''}}
      onBlur={b => {
      }}
      validationSchema={
        Yup.object().shape({
          email: Yup.string().email('Email not valid').required('Email is required'),
          username: Yup.string().min(2, 'Username must be at least 2 characters long').required('Username is required'),
          password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required')
        })
      }
      validate={values => {
      }}
      onSubmit={props.submit}
      render={({isSubmitting, isValid}) => {
        return (
          <Form>
            <Field component={MyTextField} name="email" type="email" placeholder="email"/>
            <Field component={MyTextField} name="username" type="text" placeholder="UserName"/>
            <Field component={MyTextField} name="password" type="password" placeholder="Password"/>
            <Button
              type="submit"
              variant="raised"
              color="primary"
              className={styles.button}
              // disabled={isSubmitting || !isValid}
              disabled={!isValid}
            >
              Submit
            </Button>
          </Form>)
      }}/>
  );
};

const mapStateToProps = state => {
  return {
    contact: state.contact,
    error: state.errors.error
  };
};

export default connect(
  mapStateToProps,
  {submit: createContactRequest})(App);
