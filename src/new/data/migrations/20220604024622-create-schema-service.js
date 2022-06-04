'use strict';

const schema = "service";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE SCHEMA ${schema}`);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP SCHEMA ${schema}`);
  }
};
