import { Button, Box } from '@chakra-ui/core';
import {Formik, Form, FormikState, FormikHelpers} from 'formik';
import React from 'react';
import NumberInput from './NumberInput';
import { FaSearch } from "react-icons/fa"
import {SearchFormValues} from "../../model/SearchFormValues";
import {SearchFormSchema} from "./Schema";
import DateInput from "./DateInput";

interface IProps {
  onSubmit: (data: SearchFormValues) => void,
  defaultValues: SearchFormValues;
  isLoading: boolean
}

const SearchForm: React.FC<IProps> = (props: IProps) => {


  return (
    <Box width={["100%", "100%", "90%", "90%"]} m="auto" height="100%" style={{ borderBottom: "5px solid rgba(0, 0, 0, .2)" }}>
      <Formik
        initialValues={props.defaultValues}
        onSubmit={(values: SearchFormValues, actions: FormikHelpers<SearchFormValues>) => props.onSubmit(values)}
        validateOnChange
        validationSchema={SearchFormSchema}>
        {(formikState : FormikState<SearchFormValues>) => (
          <Form>
            <Box p={4} display={{ md: "flex" }} justifyContent={["space-between", "space-evenly", "space-around", "center"]}>
              <DateInput label="Pobyt od" name="dateFrom"/>
              <DateInput label="Pobyt do" name="dateTo"/>
            </Box>
            <Box p={4} display={{ md: "flex" }} justifyContent={["space-between", "space-evenly", "space-around", "center"]}>
              <NumberInput label="Dorośli" name="nbAdults" helperText="Wpisz liczbę dorosłych." min={0}/>
              <NumberInput label="Dzieci" name="nbChildren" helperText="Wpisz liczbę dzieci." min={0}/>
            </Box>
            <Box p={4} textAlign="center">
              <Button type="submit" width={["100%", "100%", "80%", "455px"]} isLoading={props.isLoading} variantColor="teal">
                  <Box as={FaSearch} size="1em" d="inline-block" mr={2} /> Wyszukaj
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>)
}

export default SearchForm