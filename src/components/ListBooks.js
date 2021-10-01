import Book from './Book';

const ListBooks = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
          books.map((book) => (
            <div key={`bookContent-${book.item_id}`}>
              <Book bookInfo={book} index={book.item_id} />
            </div>
          ))
      }
    </div>
  );
};

export default ListBooks;
