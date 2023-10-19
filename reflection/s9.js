function d_split_list(xs) {
    const mid = math_ceil(length(xs) / 2);
    let traverser = xs;
    
    for (let i = 0; i < mid; i = i + 1) {
        if (i === mid - 1) {
            const temp = tail(traverser);
            set_tail(traverser, null);
            traverser = temp;
        } else {
            traverser = tail(traverser);
        }
    }
    
    return pair(xs, traverser);
}

function d_merge(xs, ys) {
    if (is_null(xs)) {
        return ys;
    } else if (is_null(ys)) {
        return xs;
    } else if (head(xs) < head(ys)) {
        set_tail(xs, d_merge(tail(xs), ys));
        return xs;
    } else {
        set_tail(ys, d_merge(xs, tail(ys)));
        return ys;
    }
}

function d_merge_sort(xs) {
    if (is_null(tail(xs))) {
        return xs;
    } else {
        const split = d_split_list(xs);
        return d_merge(d_merge_sort(head(split)), d_merge_sort(tail(split)));
    }
}

function binary_search(A, x) {
    let low = 0;
    let high = array_length(A);
    
    while (low <= high) {
        const mid = math_floor((low + high) / 2);
        if (A[mid] === x) {
            return true;
        } else if (mid < x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return false;
}

// 1
function make_optimized_search(A) {
    const sorted = d_merge_sort(A);
    return x => binary_search(A, x);
} 

// 2
// a.
function fib_a(x) {
    if (x === 0 || x === 1) {
        return x;
    } else {
        const fib_array = [0, 1];
        while (array_length(fib_array) <= x) {
            fib_array[array_length(fib_array)] = fib_array[array_length(fib_array) - 1] + fib_array[array_length(fib_array) - 2];
        }
        
        return fib_array[x];
    }
}

//b.
function fib_2e(x) {
    if (x === 0 || x === 1) {
        return x;
    } else {
        let prev1 = 0;
        let prev2 = 1;
        let num = 1;
        
        for (let i = 1; i < x; i = i + 1) {
            num = prev1 + prev2;
            prev1 = prev2;
            prev2 = num;
        }
        
        return num;
    }
}

/*
3.
mchoose(7, 4)
    mchoose(6, 3)
        mchoose(5, 3); mchoose(5, 2)
            mchoose(4, 2); mchoose(4, 1)
                mchoose(3, 1); mchoose(3, 0) = 1


mchoose(6, 4)
    mchoose(5, 3)
        mchoose(4, 3); mchoose(4, 2)
            mchoose(3, 2); mchoose(3, 1)
                mchoose(2, 1); mchoose(2, 0) = 1
    
    
    

mchoose(5, 4)
    mchoose(4, 3)
        mchoose(3, 3) = 1; mchoose(3, 2)
            mchoose(2, 2) = 1; mchoose(2, 1)
                mchoose(1, 1) = 1; mchoose(1, 0) = 1

mchoose(4, 4) = 1; 

Space theta(nk)
Time theta((nk)
*/

let total = 365;
let product = 1;

for (let i = 0; i < 23; i = i + 1) {
    product = product * total;
    total = total - 1;
}

product / math_pow(365, 23);



































