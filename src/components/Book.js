import { useDispatch } from 'react-redux';
import { deleteData } from '../redux/books/requestAPI';

const Book = (props) => {
  const { bookInfo, index } = props;
  const {
    title, author, category, progress, currentChapter,
  } = bookInfo;
  const dispatch = useDispatch();

  const deleteBook = (e, index) => {
    e.preventDefault();
    dispatch(deleteData(index));
  };

  return (
    <>
      <div className="list-item" id={`book-${index}`}>
        <div className="descriptionBook">
          <strong>{category}</strong>
          <h2>{title}</h2>
          <p>{author}</p>
          <div className="interact">
            <button id={`CommentButton-${index}`} type="button" className="buttonLine">Comments</button>
            <button id={`RemoveButton-${index}`} type="button" className="buttonLine" onClick={(e) => deleteBook(e, index)}>Remove</button>
            <button id={`EditButton-${index}`} type="button">Edit</button>
          </div>
        </div>
        <div className="leftContent">
          <div className="progressBook">
            <div className="barStatus" />
            <div>
              <h3>100%</h3>
              <p>
                {progress}
                Completed
              </p>
            </div>
          </div>
          <div className="statusBook">
            <h5>CURRENT CHAPTER</h5>
            <p>{currentChapter}</p>
            <button type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
