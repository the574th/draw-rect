function drawRectangle(x,y) {
    for (var u = 0; u < y; u++) {
        let rowList = [];
        for (var i = 0; i < x; i++ ) {
            if ((u === 0) || (u === (y-1))) {
                if ((i === 0) || (i === (x-1))) {
                    rowList.push('o')
                } else {
                    rowList.push('-')
                }
            } else {
                if ((i === 0) || (i === (x-1))) {
                    rowList.push('|')
                } else {
                    rowList.push(' ')
                }
            }
        }
        console.log(rowList.join(''))
    }
}

drawRectangle(2,2)


// function drawRectangle(x) {
//     let list = [];
//     for (var i = 0; i < x; i++ ) {
//         if ((i === 0) || (i === (x-1))) {
//             list.push('o')
//         } else {
//             list.push('-')
//         }
//     }
//     console.log(list.join(''))
// }

// drawRectangle(3)x