const ListBooks = (props) => {
  const { books } = props;

  return (
    <div className="list">
      {
          books.map((book, index) => (
            <div key={book.title} className="list-item" id={index}>
              <div className="left">
                <strong>{book.category}</strong>
                <h2>{book.title}</h2>
                <p>{book.author}</p>
                <div className="interact">
                  <span>Comments</span>
                  |
                  <span>Remove</span>
                  |
                  <span>Edit</span>
                </div>

              </div>
              <div className="middle">
                <p>
                  {book.progress}
                  {' '}
                  Completed
                </p>
              </div>
              <div className="right">
                <h5>CURRENT CHAPTER</h5>
                <p>{book.current_chapter}</p>
                <button type="button">UPDATE PROGRESS</button>
              </div>

            </div>
          ))
      }
    </div>
  );
};

export default ListBooks;
