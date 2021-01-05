import './css/App.scss';
import React, {useEffect, useState} from 'react';
import { Box, Spinner, Heading } from '@chakra-ui/core';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import {SearchFormValues} from "./model/SearchFormValues";
import {RoomItem} from "./model/RoomItem";
import ApiService from "./api/ApiService";

function App() {
  const today = new Date(Date.now());
  const tomorrow = new Date(Date.now() + 86400 * 1000);
  const formatDate = (date: Date) => date.toISOString().split('T')[0];
  const [searchFormValues, setSearchFormValues] = useState<SearchFormValues>({
      dateFrom: formatDate(today),
      dateTo: formatDate(tomorrow),
      nbAdults: 2,
      nbChildren: 0
  });
  const [results, setResults] = useState<RoomItem[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
      setLoading(true);
      ApiService.fetchData(searchFormValues).then((results : RoomItem[]) => {
         setResults(results);
         setLoading(false);
      });
  }, [searchFormValues]);

  return (
    <div className="page-wrapper">
      <Heading as="h1" textAlign="center" fontSize={{ md: "1.8rem", sm: "1.5rem", xs: "1.3rem" }}>Wybierz odpowiednie informacje, aby zobaczyć ceny</Heading>
      <SearchForm
        defaultValues={searchFormValues}
        onSubmit={(values: SearchFormValues) => setSearchFormValues(values)}
        isLoading={isLoading}
      />
      {
        isLoading ?
          <Box textAlign="center" m={[8, 12, 16, 20]}>
            <Spinner
              width={["5rem", "6rem", "7rem", "8rem"]}
              height={["5rem", "6rem", "7rem", "8rem"]}
              speed={"0.7s"}
              m="auto"
              thickness="4px"
              emptyColor="gray.200"
              color="teal.500"
            />
          </Box> :
           <List data={results} />}
    </div>
  );
}

export default App;
