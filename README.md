"# fivegame" 

練習製作Js五子棋，從中學習到很厲害的寫法，但閱讀性不高。不過自己去讀懂的時候，蠻有成就感，故紀錄了下來

程式碼如下為判斷五子棋贏的條件，運用了運算子的優先順序再轉為二元運算子比較。


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
