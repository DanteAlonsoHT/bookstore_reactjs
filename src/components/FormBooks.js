const FormBooks = () => (
  <form>
    <h2>ADD NEW BOOK</h2>
    <input type="text" id="title" name="title" placeholder="Book title" />

    <select id="category" name="category">
      <option selected disabled>Action</option>
      <option value="ScienceFiction">Science Fiction</option>
      <option value="Drama">Drama</option>
      <option value="Economy">Economy</option>
      <option value="Romance">Romance</option>
    </select>

    <input type="submit" value="ADD BOOK" />

  </form>
);
export default FormBooks;
