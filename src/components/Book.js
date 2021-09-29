const Book = (props) => {
  const { bookInfo, index } = props;

  return (
    <>
      <div className="list-item" id={`book, ${bookInfo.id}!`}>
        <div className="descriptionBook">
          <strong>{bookInfo.category}</strong>
          <h2>{bookInfo.title}</h2>
          <p>{bookInfo.author}</p>
          <div className="interact">
            <button id={`CommentButton-${index}`} type="button">Comments</button>
            |
            <button id={`RemoveButton-${index}`} type="button">Remove</button>
            |
            <button id={`EditButton-${index}`} type="button">Edit</button>
          </div>
        </div>
        <div className="progressBook">
          <p>
            {bookInfo.progress}
            {' '}
            Completed
          </p>
        </div>
        <div className="statusBook">
          <h5>CURRENT CHAPTER</h5>
          <p>{bookInfo.current_chapter}</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};
export default Book;
