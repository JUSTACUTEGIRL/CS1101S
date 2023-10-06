function combinations(xs, k) {
    if (k === 0) {
        return list(null);
    } else if (is_null(xs)) {
        return null;
    } else {
        const list_with_head = map(x => pair(head(xs), x), combinations(tail(xs), k -1));
        const list_without_head = combinations(tail(xs), k);
        return append(list_with_head, list_without_head);
    }
}

function subset(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        const without_head = subset(tail(xs));
        const with_head = map(x => pair(head(xs), x), without_head);
        return append(without_head, with_head);
    }
}

function permutations(xs) {
    if (is_null(xs)) {
        return list(null);
    } else {
        return accumulate(append, null, map(x => map(y => pair(x, y), permutations(remove(x, xs))), xs));
    }
}

//display_list(permutations(list(1, 2, 3)));

//display_list(combinations(list(1, 2, 3, 4, 5, 6, 7), 2));

// display_list(subset(list(1, 2, 3)));

function plus_one(x) {
    return x + 1;
}

function trans(f) {
    return x => 2 * f(2 * x);
}

function twice(f) {
    return x => f(f(x));
}

//twice(trans)(plus_one)(1);

function triplets(xs) {
    function list_ref_zero(xs, n) {
        return n >= length(xs)
               ? 0
               : list_ref(xs, n);
    }
    
    return map(x => list(list_ref_zero(xs, x), list_ref_zero(xs, x + 1), list_ref_zero(xs, x + 2)),
               build_list(x => x * 3, length(xs) % 3 === 0 ? length(xs) / 3 : math_floor(length(xs) / 3) + 1));
}

//triplets(list(1, 2, 3, 4));

function make_row_coordinates_list(row) {
    return map(x => pair(row, x), enum_list(0, 8));
}

display_list(make_row_coordinates_list(4));