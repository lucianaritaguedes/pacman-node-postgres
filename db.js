const Sequelize = require('sequelize');
// const sequelize = new Sequelize('nomebd', 'usuario', 'senha', {dialect: 'mysql', host: 'localhost'});
db_user = "pacman";   // "root";
db_pass = "Pedro290607";
db_serv = "pacman.mysql.dbaas.com.br";   // "localhost";
db_port = "3306";
db_name   = "pacman";
const sequelize = new Sequelize(db_name, db_user, db_pass, {dialect: 'mysql', host: db_serv});
 
module.exports = sequelize;


/************************** >> FIM DO CÓDIGO << *******************************************************

/* ESTRUTURA DAS TABELAS DO BANCO DE DADOS COM MYSQL

CREATE TABLE `pacman`.`game_log` (
  `log_id` INT NOT NULL AUTO_INCREMENT,
  `user_email` VARCHAR(60) NULL,
  `match_number` INT NULL,
  `match_ts` BIGINT(20) NULL,
  `match_level` INT NULL,
  `score` INT NULL,
  `lifes` INT NULL,
  `pm_direction` INT NULL,
  `pm_x` INT NULL,
  `pm_y` INT NULL,
  `g1_x` INT NULL,
  `g1_y` INT NULL,
  `g2_x` INT NULL,
  `g2_y` INT NULL,
  `g3_x` INT NULL,
  `g3_y` INT NULL,
  `g4_x` INT NULL,
  `g4_y` INT NULL,
  `indice` INT NULL,
PRIMARY KEY (`log_id`));

*/