function count_pairs(x) {
     if (!is_pair(x)) {
        return 0;
     } else {
        return 1 + count_pairs(head(x)) + count_pairs(tail(x));
     }
}

const pair1 = pair(1, pair(2, pair(3, null)));
set_tail(tail(tail(pair1)), pair1);

function count_pairs_correct(pointer_list, x) {
    if (!is_pair(x) || !is_null(member(x, pointer_list))) {
        return 0;
    } else {
        pointer_list = pair(x, pointer_list);
        return 1 + count_pairs_correct(pointer_list, head(x)) + count_pairs_correct(pointer_list, tail(x));
    }
}

count_pairs_correct(null, pair1);