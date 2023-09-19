//1
function my_map(f, xs) {
    return accumulate((x, y) => pair(f(x), y), null, xs);
}

//my_map(x => x * x, list(1, 2, 3));

//2
function remove_duplicates(lst) {
    function remove_duplicates_list(lst, xs) {
        return is_null(lst)
               ? xs
               : remove_duplicates_list(filter(x => x !== head(lst), lst), append(xs, list(head(lst))));
    }
    
    return remove_duplicates_list(lst, null);
}

display_list(remove_duplicates(list(1, 1, 2, 2, 3, 5, 6, 4, 2, 7)));
display_list(remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2)));

//3
function makeup_amount(x, coins) {
    if (x === 0) {
        return list(null);
    } else if (x < 0 || is_null(coins)) {
        return null;
    } else {
        // Combinations that do not use the head coin.
        const combi_A = makeup_amount(x, tail(coins));
        
        
        // Combinations that do not use the head coin
        // for the remaining amount.
        const combi_B = 1; // wtf does this even do
        
        // Combinations that use the head coin.
        const combi_C = is_null(makeup_amount(x - head(coins), tail(coins))) 
                            ? null 
                            : map(x => append(list(head(coins)), x), makeup_amount(x - head(coins), tail(coins)));
                        
        return append(combi_A, combi_C);
    }
}

//display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));

//const lst = list(list(5), list(10));
//display_list(append(list(5), list(10)));
//display_list(accumulate((x, y) => list(append(head(x), y)), null, lst));
