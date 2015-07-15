function startGame() {
    var state = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    var values = getValues();

    state[values.x][values.y] = 2;
 
    render(addOneNumber(state));

    addArrowHandler(function (direction) {
        console.log("Key pressed", direction);
        if (!didGameEnd(state)){
            if (direction == "right") moveRight(state);
            if (direction == "down") moveDown(state);
            if (direction == "up") moveUp(state);
            if (direction == "left") moveLeft(state);

            render(state);
        }else { alert ("You failed!");
                var a = confirm("Do you want to start a new Game?");
                if (a) {
                    startGame();
                } else {
                        window.close();
                }


        }
    });
}
function didGameEnd(state){
    for (var i = 0; i<4; i++){
        for (var j = 0; j<4; j++){
            if (state[i][j] == 0)
                return false;
        }
    }
    return true;
}

function addOneNumber(s){
        var ok = false;
        while (!ok) {
            var values = getValues();
            if (s[values.x][values.y] == 0) {
                s[values.x][values.y] = 2;
                ok = true;
            }
        }
        return s;
}


function getValues (){
       row = Math.floor(Math.random()*10)%4;
       col = Math.floor(Math.random()*10)%4;
        return {x:row, y:col};
}
function moveRight(state){

    for (var i = 0; i<4; i++){
        var freeCell = -1;
        for (var j = 3; j>=0; j--){
            if (state[i][j] === 0){
                if (j > freeCell)
                freeCell = j;
            
            } else if (freeCell !== -1){
                state[i][freeCell] = state[i][j];
                state[i][j] = 0;
                freeCell--;
            }
        }

        for(var k = 3;k>=0;k--){
            if(state[i][k] ===state[i][k-1]){
                state[i][k] *=2;
                state[i][k-1] = 0;
            }
        }


    }

    addOneNumber(state);
}

function moveLeft(state){
    for (var i = 0; i<4; i++){
        var freeCell = 5;
        for (var j = 0; j<4; j++){
            if (state[i][j] === 0){
                if (j < freeCell)
                    freeCell = j;
            
            } else if (freeCell !== 5){
                state[i][freeCell] = state[i][j];
                state[i][j] = 0;
                freeCell++;
            }
        }
        for(var k = 0;k<4;k++){
            if(state[i][k] ===state[i][k+1]){
                state[i][k] *=2;
                state[i][k+1] = 0;
            }
        }
    }
    addOneNumber(state);

}

function moveDown(state){
    for (var j = 0; j<4; j++){
        var freeCell = -1;
        for (var i = 3; i>=0; i--){
            if (state[i][j] === 0){
                if (i > freeCell)
                freeCell = i;
            
            } else if (freeCell !== -1){
                state[freeCell][j] = state[i][j];
                state[i][j] = 0;
                freeCell--;
            }
        }
        for(var k=3;k>=0;k--){
            if (k === 0) { break;
            } else if(state[k][j] ===state[k-1][j]){
                        state[k][j] *=2;
                        state[k-1][j] = 0;
            }
        }
    }
    addOneNumber(state);
}

function moveUp(state){
    for (var j = 0; j<4; j++){
        var freeCell = 5;
        for (var i = 0; i<4; i++){
            if (state[i][j] === 0){
                if (i < freeCell)
                    freeCell = i;
            } else if (freeCell !== 5){
                state[freeCell][j] = state[i][j];
                state[i][j] = 0;
                freeCell++;
            }
        }
        for(var k=0;k<4;k++){
            if (k === 3) { break;
            } else if(state[k][j] ===state[k+1][j]){
                        state[k][j] *=2;
                        state[k+1][j] = 0;
            }
        }
    }
    addOneNumber(state);
}


