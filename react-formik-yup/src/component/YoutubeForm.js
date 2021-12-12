import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import Error from './error/Error';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'
import 'react-phone-input-2/lib/material.css'

const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  name: Yup.string().required("* Enter Name").min(5, '* Too short - minimum 5 characters')
    .max(20, '* Must be shorter than 20 characters'),
  email: Yup.string().email('Not a valid email').required("* Enter email "),
  channel: Yup.string().required("* Enter channel "),
  phone: Yup.string().matches(phoneRegExp, { message: "Please enter valid phone number.", excludeEmptyString: false })
  // phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid')

});

const YoutubeForm = () => {


  const [profile, setProfile] = useState({
    name: 'mpk', email: 'mpk@email.com', channel: 'ATP', phone: ''

  });

  const { name, email, channel, phone } = profile;

  const formik = useFormik({
    initialValues: {
      name: name, email: email, channel: channel, phone: phone
    },
    onSubmit: values => { console.log('Form data:', values); resetForm() },
    validationSchema: validationSchema
  });

  const { touched, errors, handleBlur, handleChange, values, handleSubmit, resetForm, setValues } = formik;


  return (
    <div className="App">
      <form className="App" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} value={values.name}
            className={touched.name && errors.name && "error"} onBlur={handleBlur}
          />
          {/* {touched.name && errors.name && <div style={{ color: 'red', fontSize: '12px' }}>{errors.name}</div>} */}
          <Error touched message={errors.name} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" name="email" onChange={handleChange} value={values.email}
            className={touched.email && errors.email && "error"} onBlur={handleBlur}
          />
          {/* {touched.email && errors.email && <div style={{ color: 'red', fontSize: '12px' }}>{errors.email}</div>} */}
          <Error touched message={errors.email} />
        </div>
        <div>
          <label htmlFor="channel">Channel</label>
          <input type="text" id="channel" name="channel" onChange={handleChange} value={values.channel}
            className={touched.channel && errors.channel && "error"} onBlur={handleBlur}
          />
          {/* {touched.channel && errors.channel && <div style={{ color: 'red', fontSize: '12px' }}>{errors.channel}</div>} */}
          <Error touched message={errors.channel} />
        </div>
        <div>
          <PhoneInput
            defaultCountry="IN"
            name="phone"
            id="phone"
            placeholder="Phone ..."
            value={values.phone}
            onChange={(phone) =>
              setValues({
                ...values,
                phone: phone
              })}
            onBlur={handleBlur}
            enableSearch={true}
            className={touched.phone && errors.phone && "error"}
          />
          <Error touched={touched.phone} message={errors.phone} />

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
