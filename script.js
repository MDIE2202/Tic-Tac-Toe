const gameboard = (() => {
	let state = [0,0,0,0,0,0,0,0,0]

    const reset = () => {
        for (let i = 0; i < 9; i++){
            let id = 'box' + i;
            let box = document.getElementById(id);
            box.setAttribute('class', 'grid-item')
            box.innerHTML = 0
            state[i] = 0
        }

        let finish = document.getElementById('reporter')
        finish.innerHTML = ''
        let restart = document.getElementById('start')
        restart.classList.remove('hide2')
        return state

    }

    const play = (player, position) => {
        if(state[position] == 0){
            state[position] = player
            return state;             
        }
        else{
            console.log('already occupied')
            return state;
        }
        };

    const process = () => {
        let count = 0;
        for (let i = 0; i < 9; i++) {
                if(state[i] == 0){
                    count += 1
                }
                else{
                    count = count
                }
            }
        return count;
        };  

    const win = () =>{
        let win = 0;

        if(state[0] != 0 && state[0] == state[1] && state[0] == state[2]){
            let win = 1;
            return win;
        }
        else if(state[3] != 0 && state[3] == state[4] && state[3] == state[5]){
            let win = 1;
            return win;
        }
        else if(state[6] != 0 && state[6] == state[7] && state[6] == state[8]){
            let win = 1;
            return win;
        }
        else if(state[0] != 0 && state[0] == state[3] && state[0] == state[6]){
            let win = 1;
            return win;
        }
        else if(state[1] != 0 && state[1] == state[4] && state[1] == state[7]){
            let win = 1;
            return win;
        }
        else if(state[2] != 0 && state[2] == state[5] && state[2] == state[8]){
            let win = 1;
            return win;
        }
        else if(state[0] != 0 && state[0] == state[4] && state[0] == state[8]){
            let win = 1;
            return win;
        }
        else if(state[2] != 0 && state[2] == state[4] && state[2] == state[6]){
            let win = 1;
            return win;
        }
        else{
            console.log('no winner')
            return win;
        }
        
    }
  
  return {
    play,
    process,
    reset,
    win
  };
})();


const player = (name, symbol) => {
    const getName = name;
    const getSymbol = symbol;

	return {
        getName,
        getSymbol
    }
      
};

const statereader = (position, player1, player2) => {

    const count = gameboard.process()
    
    if(count % 2 == 0){
            let active_player = player2
            state = gameboard.play(active_player.getSymbol, position)

            for (let i = 0; i < 9; i++){
                let id = 'box' + i;
                let box = document.getElementById(id);
                if (state[i] == 2){
                    box.innerHTML = '<img src="./images/circle.svg" width =100% height = 100% display = contain>'
                }
            }

            win = gameboard.win()
            console.log(win)
            if (win == 1){
                let finish = document.getElementById('reporter')
                text = '<h1>'+active_player.getName + ' WINS!'+'</h1>';
                finish.innerHTML = text;

                for (let i = 0; i < 9; i++){
                    let id = 'box' + i;
                    let box = document.getElementById(id);
                    box.setAttribute('class', 'grid-item2')
                }

            }
                
                
            else{
                win = win
            }

        }
    else{
            let active_player = player1
            state = gameboard.play(active_player.getSymbol, position)
            
            for (let i = 0; i < 9; i++){
                let id = 'box' + i;
                let box = document.getElementById(id);
                if (state[i] == 1){
                    box.innerHTML = '<img src="./images/circlecross.svg">'
                }

            }

            win = gameboard.win()
            if (win == 1){
                let finish = document.getElementById('reporter')
                text = '<h1>'+active_player.getName + ' WINS!'+'</h1>';
                finish.innerHTML = text;
                
                for (let i = 0; i < 9; i++){
                    let id = 'box' + i;
                    let box = document.getElementById(id);
                    box.setAttribute('class', 'grid-item2')
                
                }
            }
            else{
                win = win
            }
        }

    
    
    
};

const username1 = () =>{
    let user1 = document.getElementById("user1").value;
    let user2 = document.getElementById("user2").value;
    const player1 = player(user1, 1)
    const player2 = player(user2, 2)
    console.log(player1)
    console.log(player2)

    let report = document.getElementById('reporter')
    report.innerHTML = player1.getName + ' VS ' + player2.getName;

    for (let i = 0; i < 9; i++){
        let id = 'box' + i;
        let box = document.getElementById(id);
        box.addEventListener('click', function(){statereader(i, player1, player2)})
    }

    let button_exit = document.getElementById("start");
    button_exit.setAttribute('class', 'hide2')

}





button = document.getElementById('reset')
button.addEventListener('click', function(){gameboard.reset()})




