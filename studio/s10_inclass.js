function rotate_matrix(M) {
    const SIZE = array_length(M);
    
    for (let row = 0; row < SIZE; row = row + 1) {
        for (let column = row; column < SIZE; column = column + 1) {
            const temp = M[row][column];
            M[row][column] = M[column][row];
            M[column][row] = temp;
        }
    }
    
    for (let row = 0; row < SIZE; row = row + 1) {
        for (let column = 0; column < SIZE / 2; column = column + 1) {
            const temp = M[row][column];
            M[row][column] = M[row][SIZE - column - 1];
            M[row][SIZE - column - 1] = temp;
        }
    }
}

const M = [[1, 2], [3, 4]];

const L = [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12],
           [13, 14, 15, 16]];
           
const R = [[1, 2, 3],
           [5, 6, 7],
           [9, 10, 11]];

rotate_matrix(M);
M;