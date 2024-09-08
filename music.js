const playlist = [
    [1, 2], //2
    [2, 1], //4
    [1, 1], //5
    [2, 2], //9
]

/*
1: [1, ->2]
2: [3, ->4] <- 4 > 3, 2 < 3
3: [5, ->5] <- 5 > 3, 4 > 3
4: [6, ->9]

3

*/

const timeSlots = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function findMusic(playlist, timeSlots) {
    const musicTime = []

    for (let i = 0; i < playlist.length; i++) {
        if (i === 0) {
            musicTime.push(playlist[i][0] * playlist[i][1])
        } else {
            musicTime.push(musicTime[musicTime.length - 1] + playlist[i][0] * playlist[i][1])
        }
    }

    const res = []

    for (let i = 0; i < timeSlots.length; i++) {
        // let l = -1
        // let r = musicTime.length - 1

        // while (l + 1 < r) {
        //     const middle = Math.floor((l + r) / 2)

        //     // var waitTill = new Date(new Date().getTime() + sec * 1000)
        //     // while (waitTill > new Date()) {}

        //     if (musicTime[middle] >= timeSlots[i]) {
        //         r = middle
        //     } else {
        //         l = middle
        //     }
        // }

        for (let j = !!res.length ? res[res.length - 1] - 1 : 0; j < musicTime.length; j++) {
            if (timeSlots[i] <= musicTime[j]) {
                res.push(j + 1)
                break
            }
        }

        // res.push(r + 1)
    }

    return res
}

console.log(findMusic(playlist, timeSlots))
