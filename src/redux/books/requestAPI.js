import { loadFromApi, addBook, removeBook } from './books';

const fetchList = async () => {
  const data = [];
  const response = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qutzaY0uS5mNGE9eIPgK/books/');
  const obj = await response.json();
  const keys = Object.keys(obj);
  keys.forEach((key) => { data.push({ ...obj[key][0], item_id: key }); });
  return data;
};

export const getData = () => async (dispatch) => {
  dispatch(loadFromApi(await fetchList()));
};

export const addData = (book) => (dispatch) => {
  fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qutzaY0uS5mNGE9eIPgK/books/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  dispatch(addBook(book));
};

export const deleteData = (id) => (dispatch) => {
  fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qutzaY0uS5mNGE9eIPgK/books/${id}`, {
    method: 'DELETE',
  });
  dispatch(removeBook(id));
};
