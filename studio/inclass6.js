//1
function remove_duplicates(lst) {
    const is_in_list = (x, xs) => is_null(xs)
                                  ? false
                                  : x === head(xs)
                                  ? true
                                  : is_in_list(x, tail(xs));
    
    return accumulate((x, ys) => is_in_list(x, ys) ? ys : append(list(x), ys), null, lst);
}

//display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));
// Result: list(1, 2, 3, 4)
//display_list(remove_duplicates(list("a", "x", "b", "c", "c", "b", "d")));
// Result: list("a", "x", "b", "c", "d")

function subsets(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        // Combinations that do not use the head coin.
        const combi_A = subsets(tail(xs));
        
        const combi_C = map(x => pair(head(xs), x), combi_A);
                        
        return append(combi_A, combi_C);
    }
}

//display_list(pair(1, list(2, 3)));

function permutations(s) {
    return is_null(s)
           ? list(null)
           : accumulate(append, null, map(x => map(y => pair(x, y), permutations(remove(x, s))), s));
}

display_list(permutations(list(1, 2)));
