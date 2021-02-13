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
  const isNotNull = (
    title === null || 
    author === null || 
    date_published === null || 
    publisher === null || 
    price === null || 
    status === null
  );
  return isNotNull;
};

module.exports = {
  verifyBook,
};
