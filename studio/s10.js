/*
2. 
a. Θ(n²) (1 + 2 + 3 + .. + n - 1)

3.
a. yes
cc(amount, kind of coins - 1) => 
cc(amount, kind of coins - 2) + cc(amount - first..., kind of coins - 1)

cc(amount - first..., kinds_of_coins) =>
cc(amount - first..., kind of coins - 1) + cc(amount - first... - first..., kind of coins)

two calls with similar argument

c. 
Time: O(nk) (loose bound)
Space: O(nk) (loose bound)

*/


// could have done a recursive version but that would
// bubble the smallest element to the front instead
function bubblesort_list(L) {
    const len = length(L);
    let current = L;
    
    for (let i = 0; i < len - 1; i = i + 1) {
        while (!is_null(tail(current))) {
            if (head(current) > head(tail(current))) {
                const temp = head(current);
                set_head(current, head(tail(current)));
                set_head(tail(current), temp);
            }
            
            current = tail(current);
        }
        current = L;
    }
    
    return L;
}

const mem = [];

function read(n, k) {
    return mem[n] === undefined
           ? undefined
           : mem[n][k];
}

function write(n, k, value) {
    if (mem[n] === undefined) {
        mem[n] = [];
    }
    mem[n][k] = value;
}

function first_denomination(kinds_of_coins) {
    return kinds_of_coins === 1 ?   5 :
           kinds_of_coins === 2 ?  10 :
           kinds_of_coins === 3 ?  20 :
           kinds_of_coins === 4 ?  50 :
           kinds_of_coins === 5 ? 100 : 0;
}

// The non-memoized version.
function cc(amount, kinds_of_coins) {
    return amount === 0
           ? 1
           : amount < 0 || kinds_of_coins === 0
           ? 0
           : cc(amount, kinds_of_coins - 1)
             +
             cc(amount - first_denomination(kinds_of_coins),
                kinds_of_coins);
}

// The memoized version.
// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
    if (n < 0) {
        return 0;
    } else if (read(n, k) !== undefined) {
        return read(n, k);
    } else {
        const result = n === 0
                       ? 1
                       : n < 0 || k === 0
                       ? 0
                       : mcc(n, k - 1) + mcc(n - first_denomination(k), k);
        write(n, k, result);
        return result;
    }
}

mcc(365, 5);  // Expected result: 1730









































