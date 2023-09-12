/*

1.
a. [[1, [2, [[3, null], null]]], [[4, [5, nul]], [[6, 7], null]]] / list(list(1, 2, list(3)), list(4, 5), [6, 7])
b. [1, [2, [3, [[4, null], null]]]] / list(1, 2, 3, list(4))
c. [1, [2, [3, [[4, [5, null]], null]]]] / list(1, 2, 3, list(4, 5))

2.
[[[[null, 4], 3], 2], 1] / [[[[null, 4], 3], 2], 1]

3.
head(tail(head(tail(tail(tail(lst))))));
head(tail(tail(tail(lst))));
head(head(tail(head(tail(head(tail(tail(tail(lst)))))))));
head(head(head(tail(tail(lst)))));

*/



//display_list(list(list(1, 2, list(3)), list(4, 5), pair(6, 7)));
//draw_data(pair(1, list(2, 3, pair(4, null))));
//draw_data(pair(1, pair(2, list(3, list(4, 5)))));

function reverse(lst) {
    return is_null(lst)
           ? null
           : pair(reverse(tail(lst)), head(lst));
}

//display_list(reverse(list(1, 2, 3, 4)));

const lst = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
head(head(head(tail(tail(lst)))));

//list(7, list(6, 5, 4), 3, list(2, 1));
//list(list(7), list(6, 5, 4), list(3, 2), 1);
//list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
//list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

// IN CLASS
function every_second(xs) {
    const len = length(xs);
    return len === 0 || len === 1
           ? null
           : pair(list_ref(xs, 1), every_second(tail(tail(xs))));
}

//every_second(list("a", "x", "b", "y", "c", "z", "d"));
//list_ref(list(1, 2, 3), 2);

function sum(items) {
    return length(items) === 0 ? 0 : head(items) + sum(tail(items));
}

function sums(items) {
    return list(sum(every_second(pair(0, items))), sum(every_second(items)));
}

function sums_accumulate(items) {
    return list(
            accumulate((x, y) => x + y, 0, every_second(pair(0, items))), 
            accumulate((x, y) => x + y, 0, every_second(items))
        );
}

sums(list(1, 2, 3, 4, 5));