// function drawRectangle(x) {
//     let list = [];
//     for (i = 0; i < x; i++ ) {
//         list.push('-')
//     }
//     console.log(list.join(''))
// }

// drawRectangle(3)


function drawRectangle(x) {
    let list = [];
    for (var i = 0; i < x; i++ ) {
        if ((i === 0) || (i === (x-1))) {
            list.push('o')
        } else {
            list.push('-')
        }
    }
    console.log(list.join(''))
}

drawRectangle(5)