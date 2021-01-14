import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Collapse
} from "@chakra-ui/core";
import { Field } from "formik";

interface IProps {
  label: string,
  helperText?: string,
  name: string,
  errors?: any,
}

const DateInput: React.FC<IProps> = (props: IProps) => {
  const describedBy = `${props.name}-helper-text`;
  const [value, setValue] = useState();
  return (
    <Field name={props.name}>
      {({ field, form }: { field: any, form: any }) => (
        <FormControl width={{ xl: '215px', lg: '215px' }} ml={{ xl: 3, lg: 3 }} mr={{ xl: 3, lg: 3 }} isInvalid={form.errors[props.name] && form.touched}>
          <FormLabel htmlFor={props.name}>{props.label}</FormLabel>
          <Input {...field} type="date" id={props.name} aria-describedby={describedBy} />
          <FormHelperText id={describedBy}>
            {props.helperText}
          </FormHelperText>
          { props.errors && props.errors[props.name] && form.touched ?
          <Collapse isOpen={ true }>
            <FormErrorMessage>{props.errors[props.name]}</FormErrorMessage>
          </Collapse> : "" }
        </FormControl>
      )}
    </Field>)
}

export default DateInput