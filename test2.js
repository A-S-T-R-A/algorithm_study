const A = [[1, 2, 7], [3, 4, 5]];

function findMaxInColumns(A) {
    const N = A.length;
    const M = A[0].length;
    const columns = [];

    for (let j = 0; j < M; j++) {
        let column = [];

        for (let i = 0; i < N; i++) {
            column.push(A[i][j]);
        }

        columns.push(column);
    }

    const maxInColumns = [];

    for (let j = 0; j < M; j++) {
        let maxNumb = 0;

        for (let i = 0; i < N; i++) {
            if (columns[j][i] > maxNumb) {
                maxNumb = columns[j][i];
            }
        }

        maxInColumns.push(maxNumb);
    }

    return maxInColumns;
}

console.log(findMaxInColumns(A)); 