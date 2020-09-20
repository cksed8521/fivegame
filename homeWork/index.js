let chess;
let grid;
let chessWidth = 15;
let count =0 ;
let block = false;
let AI = false;



function checkLine(x,y){
    let result1 = 3 , result2 = 3 , result3 =3 ,result4 =3;

    for(let i =0 ; i < 5 ; i++){
        result1 &= y + i > 14 ? 0 : grid[x][y + i].value
        result2 &= x + i > 14 ? 0 : grid[x + i][y].value
        result3 &= x + i > 14 || y - i < 0 ? 0 : grid[x + i][y - i].value
        result4 &= x + i > 14 || y + i > 14 ? 0 : grid[x + i][y + i].value
        return result1 | result2 | result3 | result4
    }
}

function checkFinish(){
    for (let i = 0 ; i <grid.length; i++){
        for (let j =0 ; j< grid[i].length; j++){
            if(grid[i][j].value == 0){
                continue
            }
            let result = checkLine(i , j)
            if (result > 0){
                return result
            }
        }
    }
    return 0
}


function createGrid(x, y){
    $('div').addclass('grid')
    $('div').css("left",(7+ x*50)+"px")
    $('div').css("top",(7+ x*50) + "px")
    $('div').x = x;
    $('div').y = y;
    $('div').value = 0;
}

function init(){
    grid = new Array(chessWidth)
    for (let i = 0 ; i <grid.length; i++){
    grid[i] = new Array(chessWidth)
        for (let j =0 ; j< grid[i].length; j++){
            grid[i][j] = createGrid( j,i )
            $('.grid[i][j]').click(function(){
                console.log($('.grid[j][i]'))
            })
        }
    }
}

//參考
// function draw_board(x,y){
//     var grid=[];
//     for (var j=0;j<x;j++){
//         grid[j] = [];
//         for(var i=0;i<y;i++){
//             grid[j][i]='<div>X</div>'
//         }
//     }
//     $('body').append(grid);
// }


window.onload = function () {
    chess = document.getElementById("chess");
    init();
}