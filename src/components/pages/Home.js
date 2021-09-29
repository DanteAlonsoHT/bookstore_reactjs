import dataBooks from '../dataBooks';
import ListBooks from '../ListBooks';
import FormBooks from '../FormBooks';

const Home = () => (
  <div>
    <ListBooks books={dataBooks} />
    <FormBooks />
  </div>
);

export default Home;
