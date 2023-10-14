/*
1. x = 0
x value inside the "change" frame is changed instead of the x inside the "Program" frame.
passed in as value rather than reference

*/

const L = list(1, 2, 3, 4, 5, 6, 7, 8, 9, 11);

function d_filter(pred, xs) {
    let previous = xs;
    let current = xs;
    let first = true;

    while (!is_null(current)) {
        if (pred(head(current))) {
            
            //setting xs to the first filtered element
            if (first) {
                first = false;
                xs = current;
            } else {
                set_tail(previous, current);
            }
            
            previous = tail(previous);
        }
        
        current = tail(current);
    }
    
    set_tail(previous, null);
    return xs;
}

d_filter(x => x % 2 === 0, L);


