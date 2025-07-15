// Luciana's update - begin

// const { use } = require("../..");

// Cria variáveis globais para armazenar dados a serem gravados em arquivo

gamelog = "";
tbGameLog = "";
tbGamePac = [];
tbGameGhost = [];
global_email  = "";   	
global_game   = 1;			
global_level  = 0;			
global_score  = 0;			
global_lifes  = 0;		
global_ts     = "";	
global_PM_dir = 0;			
global_PM_x   = "";			
global_PM_y   = "";
global_G1_x   = "";			
global_G1_y   = "";			
global_G2_x   = "";			
global_G2_y   = "";			
global_G3_x   = "";			
global_G3_y   = "";			
global_G4_x   = "";			
global_G4_y   = "";		
global_status = "OK";
global_indice = 0;


function updateVarPac() { 

	var agora = new Date(); 
	/*
	gamelog = { email: global_email, game_number: global_game, ts: 0, level: global_level,
				score: global_score, lifes: global_lifes, PM_dir: global_PM_dir,
				PM_x: global_PM_x, PM_y: global_PM_y, G1_x: global_G1_x, G1_y: global_G1_y,  G2_x: global_G2_x,  G2_y: global_G2_y,
				G3_x: global_G3_x,  G3_y: global_G3_y,  G4_x: global_G4_x,  G4_y: global_G4_y};
	*/
	// Informações sobre uso do XMLHttpRequest extraídas do site abaixo:
	// https://developer.mozilla.org/pt-BR/docs/Web/Guide/AJAX/Getting_Started

	global_indice++;
	
	var agora = new Date(); 
	global_mes = agora.getMonth()+1;
	global_ts = agora.getFullYear().toString() + '-' +	// ano seguido de um hífen
				global_mes.toString().padStart(2,'0') + '-' +	// mês seguido de um hífen
				agora.getDate().toString().padStart(2,'0') + ' ' +	// mês seguido de um espaço
				agora.toLocaleTimeString() + '.' +		// hora no formato hh:mm:ss seguida de um ponto
				agora.getMilliseconds().toString();   // milissegundos que complementam a hora anterior 



	gamelog = 	"email="+encodeURIComponent(global_email)+
				"&game_number="+encodeURIComponent(global_game)+
				"&ts="+encodeURIComponent(global_ts)+
				"&level="+encodeURIComponent(global_level)+
				"&score="+encodeURIComponent(global_score)+
				"&lifes="+encodeURIComponent(global_lifes)+
				"&PM_dir="+encodeURIComponent(global_PM_dir)+
				"&PM_x="+encodeURIComponent(global_PM_x)+
				"&PM_y="+encodeURIComponent(global_PM_y)+
				"&G1_x="+encodeURIComponent(global_G1_x)+
				"&G1_y="+encodeURIComponent(global_G1_y)+
				"&G2_x="+encodeURIComponent(global_G2_x)+
				"&G2_y="+encodeURIComponent(global_G2_y)+
				"&G3_x="+encodeURIComponent(global_G3_x)+  
				"&G3_y="+encodeURIComponent(global_G3_y)+  
				"&G4_x="+encodeURIComponent(global_G4_x)+  
				"&G4_y="+encodeURIComponent(global_G4_y)+
				"&indice="+encodeURIComponent(global_indice)+
				"&status="+encodeURIComponent(global_status);
				if(tbGameLog===""){
					tbGameLog=gamelog;
				}
				else {
					tbGameLog=tbGameLog+"&"+gamelog;
				}

	// se número de registros múltiplo de 25, ou status é gravar (ganhou ou perdeu)  envia dados p/ gravar
	if (global_indice%25===0 || global_status==="gravar" || global_status==="ganhou" || global_status==="perdeu") {  
		envia_dados(tbGameLog);  // envia dados para o servidor para serem gravados
		tbGameLog="";            // apaga tabela para iniciar uma nova com mais 25 registros
		if(global_status==="gravar") {
			global_game++;
			global_indice=0;
		}

		}
		global_status="OK";  // sempre volta o status para OK
}

// Luciana's update - end


	/*
	var game_obj =  ''+ 
		global_email + ',' +					// endereço de e-mail do jogador
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
	*/
