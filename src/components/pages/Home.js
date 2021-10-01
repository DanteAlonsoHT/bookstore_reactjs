import { useSelector } from 'react-redux';
import ListBooks from '../ListBooks';
import FormBooks from '../FormBooks';

const Home = () => {
  const dataBooks = useSelector((state) => state.booksReducer);
  return (
    <div>
      <ListBooks books={dataBooks} />
      <FormBooks />
    </div>
  );
};

export default Home;
