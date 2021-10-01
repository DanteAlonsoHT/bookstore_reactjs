import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addData } from '../redux/books/requestAPI';

const FormBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [author, setAuthor] = useState('');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addData(newBook));
  };

  return (
    <form id="formBook">
      <h2>ADD NEW BOOK</h2>
      <input type="text" id="titleBook" name="title" placeholder="Book title" onChange={(e) => setTitle(e.target.value)} />
      <input type="text" id="authorBook" name="author" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} />

      <select id="categoryBook" name="category" onChange={(e) => setCategory(e.target.value)}>
        <option selected disabled>Action</option>
        <option value="ScienceFiction">Science Fiction</option>
        <option value="Drama">Drama</option>
        <option value="Economy">Economy</option>
        <option value="Romance">Romance</option>
      </select>

      <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
    </form>
  );
};

export default FormBooks;
