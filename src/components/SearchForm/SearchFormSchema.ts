import * as Yup from "yup";

export const SearchFormSchema = Yup.object().shape({
  dateFrom: Yup.date()
    .min(new Date(Date.now() - 86400 * 1000), 'Data początkowa nie może być z przeszłości.')
    .required('Wymagane'),
  dateTo: Yup.date()
    .min(new Date(Date.now() + 1), 'Pobyt nie może być krótszy niż 1 dzień.')
    .required('Wymagane'),
  adults: Yup.number()
    .min(1, 'Conajmniej 1 dorosły.'),
  children: Yup.number()
    .min(0, 'Conajmniej 0.'),
});