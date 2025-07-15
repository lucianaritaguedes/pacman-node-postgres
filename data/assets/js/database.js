// Luciana's update - begin

// Cria variáveis globais para uso com o banco de dados PostgreSQL
/*
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> Conexão com a Base de Dados:
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('Base de Dados conectado com sucesso!');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};

*/

/*
function updateVarPac() { 

	var agora = new Date(); 
	var game_obj =  ''+ 
		global_email + ',' +						// endereço de e-mail do jogador
		global_game.toString() + ',' +			// número da partida
		agora.getTime().toString() + ',' +		// timeStamping em milissegundos (desde 01/01/1970)
		agora.toLocaleDateString() + ',' +		// data no formato dd/mm/aaaa
		agora.toLocaleTimeString() + '.' +			// hora no formato hh:mm:ss seguida de um ponto
		agora.getMilliseconds().toString() + ',' +// milissegundos que complementam a hora anterior 
		global_level.toString() + ',' +			// nível alcançado pelo jogador
		global_score.toString() + ',' +			// número de pontos obtidos
		global_lifes.toString() + ',' +			// número de vidas restantes
		global_PM_dir.toString() + ',' +			// direção do PacMan = 1=direita, 2=baixo, 3=esquerda, 4=cima
		global_PM_x.toString() + ',' +			// postição X do PacMan
		global_PM_y.toString() + ',' +			// postição Y do PacMan
		global_G1_x.toString() + ',' +			// postição X do Ghost1 = Blinky = vermelho
		global_G1_y.toString() + ',' +			// postição Y do Ghost1 = Blinky = vermelho
		global_G2_x.toString() + ',' +			// postição X do Ghost2 = Pinky = rosa
		global_G2_y.toString() + ',' +			// postição Y do Ghost2 = Pinky = rosa
		global_G3_x.toString() + ',' +			// postição X do Ghost3 = Inky = azul
		global_G3_y.toString() + ',' +			// postição Y do Ghost3 = Inky = azul
		global_G4_x.toString() + ',' +			// postição X do Ghost4 = Clyde = laranja
		global_G4_y.toString() + '\n' 				// postição Y do Ghost4 = Clyde = laranja seguida de salto de linha
	;
	tbGamePac+=game_obj;
	
	//console.log("updateVar - game_obj = "+game_obj);
	//console.log("tbGame="+tbGame);

}
*/