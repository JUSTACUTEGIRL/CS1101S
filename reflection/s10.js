/*
1.
a. 0   1 2 3   1 2 3 4 5
b. 0   1 2 3   4 5

3.
a. Yes, up until the last element of the original stream
b. Yes.
*/

// 2
function zip_stream(xs) {
    const len = length(xs);
    let i = 0;
    
    function zip(xs, n) {
        let current_stream = list_ref(xs, i % len);
        const temp = head(current_stream);
        current_stream = stream_tail(current_stream);
        i = i + 1;
        return pair(temp, () => zip(xs, n + 1));
    }
    
    return zip(xs, 0);
}

function number_stream(num) {
   return pair(num, () => number_stream(num));
}

const ones = number_stream(1);
const twos = number_stream(2);
const threes = number_stream(3);
const fours = number_stream(4);
const fives = number_stream(5);

eval_stream(zip_stream(list(ones, twos, threes, fours, fives)), 10);

// 3
function add_streams(s1, s2) {
    return is_null(s1)
           ? s2
           : is_null(s2)
           ? s1
           : pair(head(s1) + head(s2), () => add_streams(stream_tail(s1),stream_tail(s2)));
}

function add_zero(s) {
    return pair(0, () => s);
}

function partial_sum(s) {
    const og = s;
    
    function partial(s, og) {
        const add = add_streams(s, add_zero(og));
        return pair(head(add), () => partial(stream_tail(add), og));
    }
    
    return partial(s, og);
}

eval_stream(partial_sum(null), 100);