import React from 'react';
import Input from 'material-ui/Input';

export default ({ input, label, type, meta: { touched, error } }) =>
  <div>
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && (error && <span>{error} </span>) }
    </div>
  </div>
