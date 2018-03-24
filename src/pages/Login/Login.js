import React from 'react';
import {withFormik, Form} from 'formik';
import Yup from 'yup';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
// import {DisplayFormikState} from './helper';
import {connect} from 'react-redux';

import styles from './Login.css';
import {createContactRequest} from '../../actions/user';

const App = (props) => {
  const {values, errors, touched, isSubmitting, handleChange, handleBlur} = props;
  return (
    <Form>
      <div>
        <TextField
          id="email"
          name="email"
          label="email"
          className={styles.textField}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className={styles.errorMessage}>{(touched.email && errors.email) ? errors.email : '\u00a0'}</p>
      </div>
      <div>
        <TextField
          id="username"
          name="username"
          label="Username"
          className={styles.textField}
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className={styles.errorMessage}>{(touched.username && errors.username) ? errors.username : '\u00a0'}</p>
      </div>
      <div>
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          className={styles.textField}
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <p className={styles.errorMessage}>{(touched.password && errors.password) ? errors.password : '\u00a0'}</p>
      </div>

      <Button
        type="submit"
        variant="raised"
        color="primary"
        className={styles.button}
        disabled={isSubmitting || !props.isValid}
      >
        Submit
      </Button>
      {/*<DisplayFormikState {...props} />*/}
    </Form>
  );
};

const eApp = withFormik({
  mapPropsToValues({email, password, username, submit}) {
    return {
      email: email || '',
      password: password || '',
      username: username || '',
      submit: submit
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    username: Yup.string().min(2, 'Username must be at least 2 characters long').required('Username is required'),
    password: Yup.string().min(6, 'Password must be 6 characters or longer').required('Password is required')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting, submit}) {
    const {email, username, password} = values;
    values.submit({email, username, password});
    setSubmitting(true);
  }
})(App);

export default connect(null, {submit: createContactRequest})(eApp);
