const A = [[1,2,3],[3,4,5]]

function findMaxInRows(A) {
    
    const N = A.length
    const M = A[0].length
    const columns = []

for (let j=0; j<M; j++){
  let b_row=[]
  for (let i=0; i<N;i++){
     b_row.push(A[i][j]) 
  }
    columns.push(b_row) 
    }

    function findMaxInColumns(columns){

        const maxInColumns=[]
    
        for (let i = 0; i < columns.length; i++) {
            let maxNumb = 0
        
            for (let j = 0; j < columns.length[0]; j++) {
                if (columns[i][j] > maxNumb) {
                    maxNumb = A[i][j] // если число в массиве больше предыдущего, оно становится максимальным.
                }
            }
        
            maxInColumns.push(maxNumb)
            console.log(columns)
            console.log(maxInColumns)
        }
    }

    return findMaxInColumns(columns)
}

console.log(findMaxInRows(A))