'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable ('test', {

      name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      uuid: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(36),
      },
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('test');
  }
};
