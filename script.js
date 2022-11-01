const gameboard = (() => {
	let state = [0,0,0,0,0,0,0,0,0]

    const reset = () => {
        let state = [0,0,0,0,0,0,0,0,0]
        for (let i = 0; i < 9; i++){
            let id = 'box' + i;
            let box = document.getElementById(id);
            box.innerHTML = 0

            
        }
        return state

    }

    const play = (player, position) => {
        if(state[position] == 0){
            state[position] = player
            console.log(state)
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
        console.log('counter:', count)
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

const statereader = (position) => {

    const count = gameboard.process()

    
    if(count % 2 == 0){
            let active_player = player2
            console.log(active_player)
            state = gameboard.play(active_player.getSymbol, position)

            for (let i = 0; i < 9; i++){
                let id = 'box' + i;
                let box = document.getElementById(id);
                box.innerHTML = state[i]
            }

            win = gameboard.win()
            console.log(win)
            if (win == 1){
                gameboard.reset()
                let finish = prompt(active_player.getName + ' wins!')
            }
                
                
            else{
                win = win
            }

        }
    else{
            let active_player = player1
            console.log(active_player)
            state = gameboard.play(active_player.getSymbol, position)
            
            for (let i = 0; i < 9; i++){
                let id = 'box' + i;
                let box = document.getElementById(id);
                box.innerHTML = state[i]
            }

            win = gameboard.win()
            if (win == 1){
                gameboard.reset()
                prompt(active_player.getName + ' wins!')
            }
            else{
                win = win
            }
        }

    
    
    
};


const player1 = player('henk', 1)
const player2 = player('Bob', 2)

for (let i = 0; i < 9; i++){
    let id = 'box' + i;
    let box = document.getElementById(id);
    box.addEventListener('click', function(){statereader(i)})

    }




