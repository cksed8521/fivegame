let chess;
let grid;
let chessWidth = 15;
let count = 0;
let block = false;
let AI = false;

function createGrid(x, y) {//创建棋盘节点div
    let temp = document.createElement("div");
    temp.classList.add("grid");
    temp.style.left = (7 + x * 50) + "px";
    temp.style.top = (7 + y * 50) + "px";
    temp.x = x;
    temp.y = y;
    temp.value = 0;//0为空位，1为黑子，2为白子
    return temp;
}
// function createGrid(x, y) {
//     let temp = jQuery('<div/>', {
//         "class": 'grid',
//     })
//     temp.css("left", (7 + x * 50) + "px")
//     temp.css("top", (7 + y * 50) + "px")
//     temp.x = x;
//     temp.y = y;
//     temp.value = 0;
//     return temp;
// }


function checkLine(x, y) {
    let result1 = 3, result2 = 3, result3 = 3, result4 = 3;

    for (let i = 0; i < 5; i++) {
        result1 &= y + i > 14 ? 0 : grid[x][y + i].value
        result2 &= x + i > 14 ? 0 : grid[x + i][y].value
        result3 &= x + i > 14 || y - i < 0 ? 0 : grid[x + i][y - i].value
        result4 &= x + i > 14 || y + i > 14 ? 0 : grid[x + i][y + i].value
    }
    return result1 | result2 | result3 | result4
}

function checkFinish() {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].value == 0) {
                continue
            }
            let result = checkLine(i, j)
            if (result > 0) {
                return result
            }
        }
    }
    return 0
}


function init() {
    grid = new Array(chessWidth)
    for (let i = 0; i < grid.length; i++) {
        grid[i] = new Array(chessWidth)
        for (let j = 0; j < grid[i].length; j++) {
            grid[i][j] = createGrid(j, i)
            grid[i][j].onclick = function () {
                console.log('hi')
                if (this.value > 0 || block) {
                    return
                }
                block = true
                $(this).css('background-image', "url('./img/" + (count % 2 + 1) + ".png')")
                this.value = count % 2 + 1;//设置节点的value
                count += 1;
                const result = checkFinish();
                console.log(checkFinish())
                if (result == 0) {
                    if (AI && count % 2 == 1) {
                        block = false
                        aiAction();
                    }
                    block = false
                } else {
                    setTimeout(() => {
                        alert(result == 1 ? "黑棋胜" : "白棋胜")
                    }, 200);
                }
            }
            chess.append(grid[i][j]);
        }
    }
}

$('#start').click(function () {
    window.onload = function () {
        chess = $("#chess");
        init();
    }
})
$('#reset').click(function () {
    $('*').css('background-image', '')
    chess = $("#chess");
    init();
})