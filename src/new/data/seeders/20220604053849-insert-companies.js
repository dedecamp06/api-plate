'use strict';

const schema = 'service'
const tableName = 'companies_table'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
        INSERT INTO ${schema}.${tableName} (nome, cnpj) VALUES ('Empresa Tony Stark','999999');
        INSERT INTO ${schema}.${tableName} (nome, cnpj) VALUES ('Empresa Os Vingadores','512552521');
        INSERT INTO ${schema}.${tableName} (nome, cnpj) VALUES ('Empresa DC','5215125251');
      `);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete({ tableName, schema }, null, {})
  }
};