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





