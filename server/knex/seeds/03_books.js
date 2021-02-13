
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return knex('books').insert([
        {
          title: "The Da Vinci Code", 
          author: "Dan Brown", 
          date_published: "2003-04-01", 
          publisher: "Doubleday", 
          price: 2500, 
          status: "available"
        },
        {
          title: "The Lost Symbol", 
          author: "Dan Brown", 
          date_published: "2009-09-15", 
          publisher: "Doubleday", 
          price: 3000, 
          status: "available"
        },
        {
          title: "It", 
          author: "Stephen King", 
          date_published: "1986-09-15", 
          publisher: "Viking", 
          price: 1500, 
          status: "out of stock"
        },
      ]);
    });
};
