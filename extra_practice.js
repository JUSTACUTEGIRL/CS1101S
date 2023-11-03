// function read(a, pos) {
//     return pos < 0 || pos >= array_length(a)
//           ? 0
//           : a[pos];
// }

// function peak(a) {
//     let low = 0;
//     let high = array_length(a) - 1;
    
//     while (low < high) {
//         let mid = math_floor((low + high) / 2);
        
//         if (read(a, mid) > read(a, mid - 1) && read(a, mid) > read(a, mid + 1)) {
//             return a[mid];
//         } else if (a[mid] < read(a, mid + 1)) {
//             low = mid + 1;
//         } else {
//             high = mid - 1;
//         }
//     }
    
//     return a[low];
// }

// const a = [1, 3, 5, 10, 11, 8, 7, 6, 2];
// //peak(a); // returns 11
// const b= [10, 9, 8, 7, 5, 1];
// //peak(b); // returns 10
// const c = [1, 5, 7, 8, 9, 11];
// //peak(c); // returns 11

// function stream_to_num(s) {
//     function helper(s, n) {
//         return is_null(s)
//               ? n
//               : helper(stream_tail(s), n * 10 + head(s));
//     }
    
//     return helper(s, 0);
// }

// function num_to_stream(num) {
//     let og_len = math_floor(math_log10(num)) + 1;
    
//     function nts(num) {
//         const len = math_floor(math_log10(num)); 
//         const next = num % math_pow(10, len);
//         og_len = og_len - 1;
//         return og_len < 0
//               ? null
//               : pair(math_floor(num / math_pow(10, len)), () => nts(next));
//     }
    
//     return nts(num);
// }

// function add_two(num1, num2) {
//     return num_to_stream(stream_to_num(num1) + stream_to_num(num2));
// }

// const a = pair(5, () => pair(0, () =>  pair(5, () =>  null)));
// const b = pair(6, () => pair(0, () => pair(7, () => pair(3, () => null))));

// function find_max(a, n) {
//     if (array_length(a) === 0) {
//         return undefined;
//     }
    
//     let largest = a[0];
    
//     for (let i = 0; i <= n; i = i + 1) {
//         if (largest < a[i]) {
//             largest = a[i];
//         }
//     }
    
//     return largest;
// }

// const a = [1, 2, 4, 6, 7, 14, 3, 5];
// find_max(a, 7); //returns 5, until index 7, the biggest element is 14, in index 5
// find_max(a, 3); // returns 3, until index 3, the biggest element is 6, in index 3

// function flip(n, a) {
//     if (n > array_length(a) - 1) {
//         return "index out of range";
//     } else if (array_length(a) === 0) {
//         return [];
//     }
    
//     const mid = math_floor(n / 2);
//     for (let i = 0; i <= mid; i = i + 1) {
//         const temp = a[i];
//         a[i] = a[n - i];
//         a[n - i] = temp;
//     }
    
//     return a;
// }

// function sort(a) {
//     for (let i = array_length(a) - 1; i > 0; i = i - 1) {
//         let largest = a[i];
//         let index = i;
        
//         for (let j = 0; j <= i; j = j + 1) {
//             if (largest < a[j]) {
//                 index = j;
//                 largest = a[j];
//             }
//         }
        
//         if (index === i) {
//             continue;
//         } else {
//             flip(index, a);
//             flip(i, a);
//         }
//     }
    
//     return a;
// }

// function flip_count(a) {
//     let count = 0;
    
//     for (let i = array_length(a) - 1; i > 0; i = i - 1) {
//         let largest = a[i];
//         let index = i;
        
//         display(a);
//         for (let j = 0; j <= i; j = j + 1) {
//             if (largest < a[j]) {
//                 index = j;
//                 largest = a[j];
//             }
//         }
        
//         if (index === i) {
//             continue;
//         } else if (index === 0) {
//             count = count + 1;
//             flip(i, a);
//         } else {
//             count = count + 2;
//             flip(index, a);
//             flip(i, a);
//         }
//     }
    
//     return count;
// }

// function alternate_sum(a) {
//     if (is_null(a)) {
//         return null;
//     } else {
//         const e = head(a) % 2;
//         return pair(accumulate((x, y) => x % 2 === e ? x + y : y, 0, a), alternate_sum(tail(a)));
//     }
// }

// const a = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// alternate_sum(a); // return list(25, 30, 24, 28, 21, 24, 16, 18, 9, 10);

function same_sum(size) {
    if (size % 2 === 0) {
        return "size must be odd";
    } else if (size <= 0) {
        return "invalid n";
    } else {
        let row = 0;
        let column = math_floor(size / 2);
        
        const m = [];
        for (let i = 0; i < size; i = i + 1) {
            m[i] = [];
            return 1;
        }
        
        let i = 1;
        while (i <= size * size) {
            if (m[row][column] === undefined) {
                m[row][column] = i;
                row = row - 1;
                column = column + 1;
                i = i + 1;
            } else {
                row = row + 2;
                column = column - 1;
            }
            
            if (row < 0) {
                row = size + row;
            } else if (row > size - 1) {
                row = 0 + row - size;
            }
            
            if (column > size - 1) {
                column = 0 + column - size;
            } else if (column < 0) {
                column = size + column;
            }
        }
        
        return m;
    }
}

same_sum(5);







