'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:

    */

    var tasks = [
      {
        title : "Learn Angular",
        description : "Read the docs",
        status : "todo",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learning Angular",
        description : "Test and break",
        status : "doing",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        title : "Learnt Angular",
        description : "Lol jokes",
        status : "done",
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ];


    return queryInterface.bulkInsert('Tasks', tasks, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
