
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookstores').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookstores').insert([
        {
          name: "Indigo", 
          manager: "Jane Doe", 
          date_opened: '2005-12-25', 
          location: "1234 Fake St, Vancouver, BC, Canada"
        },
        {
          name: "Indigo", 
          manager: "John Deer", 
          date_opened: '2010-10-31', 
          location: "4321 Unknown Rd, Toronto, Ontario, Canada",
        },
      ]);
    });
};
