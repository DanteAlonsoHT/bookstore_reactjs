import Book from './Book';

const ListBooks = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
          books.map((book) => (
            <div key={`bookContent-${book.id}`}>
              <Book bookInfo={book} index={book.id} />
            </div>
          ))
      }
    </div>
  );
};

export default ListBooks;
