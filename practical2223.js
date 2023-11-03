// Task 1

// a
function insert_subseq(L, pos, S) {
    return pos === 0
           ? append(S, L)
           : pair(head(L), insert_subseq(tail(L), pos - 1, S));
}

// b
function remove_subseq(L, start_pos, end_pos) {
    function helper(L, start_pos, end_pos, n) {
        return is_null(L)
               ? null
               : start_pos <= n && n <= end_pos
               ? helper(tail(L), start_pos, end_pos, n + 1)
               : pair(head(L), helper(tail(L), start_pos, end_pos, n + 1));
    }
    
    return helper(L, start_pos, end_pos, 0);
}

// Task 2

// a
function is_prefix_of(subseq, seq) {
    return is_null(seq) && !is_null(subseq)
           ? false
           : is_null(subseq)
           ? true
           : head(subseq) === head(seq) && is_prefix_of(tail(subseq), tail(seq));
}

// b
function tail_n_times(xs, n) {
    return is_null(xs)
           ? null
           : n <= 0
           ? xs
           : tail_n_times(tail(xs), n - 1);
}

function subseq_replace(new_sub, old_sub, seq) {
    return is_null(seq)
           ? null
           : is_prefix_of(old_sub, seq)
           ? append(new_sub, subseq_replace(new_sub, old_sub, tail_n_times(seq, length(old_sub))))
           : pair(head(seq), subseq_replace(new_sub, old_sub, tail(seq)));
}

// Task 3

// a
function make_NiFT(T) {
    if (is_null(T)) {
        return T;
    } else {
        const nums = accumulate((x, y) => is_number(x) ? pair(x, y) : y, null, T);
        const lists = accumulate((x, y) => is_list(x) ? pair(x, y) : y, null, T);
        const nift_lists = map(x => make_NiFT(x), lists);
        
        return append(nums, nift_lists);
    }
}

function insert(x, xs) {
return is_null(xs)
       ? list(x)
       : x <= head(xs)
       ? pair(x, xs)
       : pair(head(xs), insert(x, tail(xs)));
}

function insertion_sort(xs) {
return is_null(xs)
       ? xs
       : insert(head(xs), insertion_sort(tail(xs)));
}

function map_tree(fun, tree) {
return map(sub_tree =>
                !is_list(sub_tree)
                ? fun(sub_tree)
                : map_tree(fun, sub_tree),
                tree);
}

function flat_tree(T) {
    return accumulate((x, y) => is_list(x) ? append(flat_tree(x), y) : pair(x, y), null, T);
}

// b
function make_SToN(T) {
    const nums = flat_tree(T);
    let sorted = reverse(insertion_sort(nums));
    
    function return_destroy_head() {
        const temp = head(sorted);
        sorted = tail(sorted);
        return temp;
    }
    
    function helper(T) {
        return is_null(T)
               ? null
               : accumulate((x, y) => is_list(x) ? pair(helper(x), y) : pair(return_destroy_head(), y), null, T);
    }
    
    return helper(T);
}

// Task 4
