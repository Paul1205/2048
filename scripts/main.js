function startGame() {
    var state = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    var values = getValues();

    state[values.x][values.y] = 2;
 

    var ok = false;
    while (!ok) {
        var values = getValues();
        if (state[values.x][values.y] == 0) {
            state[values.x][values.y] = 2;
            ok = true;
        }
    }


    render(state);

    addArrowHandler(function (direction) {
        console.log("Key pressed", direction);
        if (direction == "right") moveRight(state);
        if (direction == "down") moveDown(state);
        render(state);
    });
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
                freeCell = j;

                break;
            }
        }
    }
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
                freeCell = i;

                break;
            }
        }
    }
}