import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import ListBooks from '../ListBooks';
import FormBooks from '../FormBooks';
import { getData } from '../../redux/books/requestAPI';

const Home = () => {
  const dispatch = useDispatch();
  const [download, setDownload] = useState('idle');

  useEffect(() => {
    if (download === 'idle') {
      dispatch(getData());
      setDownload('done');
    }
  });

  const dataBooks = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ListBooks books={dataBooks} />
      <FormBooks />
    </div>
  );
};

export default Home;
