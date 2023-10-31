/*
a) [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], ...]

b) Pair the each element with the elements after it

c) Error: stream_map will not end

d) It will not call stream_pairs2(stream_tail(s))
until it is needed.

e) [[1, 2], [1, 3], [1, 4], [1, 5], ...]


*/

function stream_pairs(s) {
return is_null(s)
       ? null
       : stream_append(
           stream_map(
               sn => pair(head(s), sn),
               stream_tail(s)),
           stream_pairs(stream_tail(s)));
}

 function stream_append_pickle(xs, ys) {
 return is_null(xs)
 ? ys()
 : pair(head(xs),
 () => stream_append_pickle(stream_tail(xs),
 ys));
 }
 function stream_pairs2(s) {
 return is_null(s)
 ? null
 : stream_append_pickle(
 stream_map(
 sn => pair(head(s), sn),
 stream_tail(s)),
 () => stream_pairs2(stream_tail(s)));
 }
 
const integers = integers_from(1);
const s2 = stream_pairs2(integers);


eval_stream(s2, 10);