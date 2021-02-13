const verifyBook = (book) => {
  const {
    title,
    author,
    date_published,
    publisher,
    price,
    status,
    editor,
    genre,
    description,
  } = book;
  const anyNull = (
    title === null || 
    author === null || 
    date_published === null || 
    publisher === null || 
    price === null || 
    status === null
  );
  return !anyNull;
};

const verifyBookstore = (bookstore) => {
  const {
    name,
    manager,
    date_opened,
    location,
  } = bookstore;
  const anyNull = (
    name === null || 
    manager === null || 
    date_opened === null
  );
  return !anyNull;
};

module.exports = {
  verifyBook,
  verifyBookstore,
};
