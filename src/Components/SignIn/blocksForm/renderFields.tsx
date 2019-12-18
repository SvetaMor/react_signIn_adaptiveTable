import React from 'react';
import {IField, ITextField} from '../../../entities/IForms/IForms';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export const renderTextField: React.FC<ITextField> = ({
    label,
    input,
    meta: { invalid, error, touched },
    ...custom
  }) => (
    <TextField
      required
      fullWidth    
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}    
      {...input}
      {...custom}
    />
  )
  
export  const renderCheckbox: React.FC<IField> = ({ 
    input, 
    label 
  }) => (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={input.value ? true : false}
            onChange={input.onChange}
          />
        }
        label={label}
      />
    </div>
  )