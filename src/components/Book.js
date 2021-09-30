import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { bookInfo, index } = props;
  const {
    title, author, category, progress, currentChapter,
  } = bookInfo;
  const dispatch = useDispatch();

  const deleteBook = (e) => {
    e.preventDefault();
    dispatch(removeBook(title));
  };

  return (
    <>
      <div className="list-item" id={`book, ${index}!`}>
        <div className="descriptionBook">
          <strong>{category}</strong>
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="interact">
            <button id={`CommentButton-${index}`} type="button">Comments</button>
            |
            <button id={`RemoveButton-${index}`} type="button" onClick={(e) => deleteBook(e)}>Remove</button>
            |
            <button id={`EditButton-${index}`} type="button">Edit</button>
          </div>
        </div>
        <div className="progressBook">
          <p>
            {progress}
            {' '}
            Completed
          </p>
        </div>
        <div className="statusBook">
          <h5>CURRENT CHAPTER</h5>
          <p>{currentChapter}</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

export default Book;
