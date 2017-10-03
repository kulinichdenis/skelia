import React from 'react';
import Input from 'material-ui/Input';

export default ({ input, label, type, meta: { touched, error } }) =>
  <div className="input">
    <label>
      {label}
    </label>
    <div>
      <input {...input} placeholder={label} type={type} />
      { touched &&
        (error && <span className="error error--input">{error}</span>)
      }
    </div>
  </div>
