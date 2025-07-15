// definição dos parâmetros da tabela do banco de dados 

const Sequelize = require('sequelize');
const database = require('./db');
 
const Gamelog = database.define('game_log', {
    log_id: {
        type: Sequelize.INTEGER(11),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_email: {
        type: Sequelize.STRING(60),
        allowNull: true
    },
    match_number: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    match_ts: {
        type: Sequelize.DATE(6),
        allowNull: true,
    },
    match_level: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    score: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    lifes: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    pm_direction: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    pm_x: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    pm_y: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g1_x: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g1_y: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g2_x: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g2_y: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g3_x: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g3_y: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g4_x: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    g4_y: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    },
    indice: {
        type: Sequelize.INTEGER(11),
        allowNull: true,
    }
})
 
module.exports = Gamelog;