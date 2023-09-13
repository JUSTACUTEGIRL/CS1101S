//1
const LoL = list(list(1, 2), list(3, 4, 5, 6), null, list(7, 8, 9));

function flatten_list(xs) {
    return accumulate((x, y) => append(x, y), null, xs);
}

//display_list(flatten_list(LoL));


//2
const my_tree = list(1, list(2, list(3, 4), 5), list(6, 7));

function tree_sum(xs) {
    return is_null(xs)
           ? 0
           : is_list(xs)
           ? tree_sum(head(xs)) + tree_sum(tail(xs))
           : xs;
}

//tree_sum(my_tree);


//3
function tree_sum_accu(tree) {
    return accumulate_tree(x => x, (x, y) => x + y, 0, tree);
}

function accumulate_tree(f, op, initial, tree) {
    return accumulate((x, y) => is_list(x) ? op(accumulate_tree(f, op, initial, x), y) : op(f(x), y), initial, tree);
}

tree_sum_accu(my_tree);
