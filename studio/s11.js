/*
1.
A is a stream of power of two (2^0, 2^1, 2^2, 2^3, ...)

B is a stream where the subsequent number is 
1, 2, 3, 4, ... times the previous

*/

function add_streams(s1, s2) {
    return is_null(s1)
           ? s2
           : is_null(s2)
           ? s1
           : pair(head(s1) + head(s2),
           () => add_streams(stream_tail(s1),
           stream_tail(s2)));
}

function scale_stream(c, stream) {
    return stream_map(x => c * x, stream);
}

const add_series = add_streams;
const scale_series = scale_stream;
const non_neg_integers = build_stream(x => x, Infinity);

function negate_series(s) {
    return scale_series(-1, s);
}

function subtract_series(s1, s2) {
    return add_series(s1, negate_series(s2));
}

function coeffs_to_series(list_of_coeffs) {
    const zeros = pair(0, () => zeros);
    
    function iter(list) {
        return is_null(list)
               ? zeros
               : pair(head(list),
               () => iter(tail(list)));
    }
    return iter(list_of_coeffs);
}

function fun_to_series(fun) {
    return stream_map(fun, non_neg_integers);
}

function alt(s) {
    return pair(head(s) % 2 === 0 ? 1 : -1, () => alt(stream_tail(s)));
}

const alt_ones = alt(non_neg_integers);
const zeros_stream = pair(0, () => zeros_stream);

const s1 = fun_to_series(x => 1);
const s2 = fun_to_series(x => x + 1);