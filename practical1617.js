// Task 1

// a
function is_nucleobase(s) {
    return s === "A" || s === "C" || s === "G" || s === "T";
}

// b
function is_dna_strand(xs) {
    return is_null(xs)
           ? true
           : is_nucleobase(head(xs)) && is_dna_strand(tail(xs));
}

// c
function combine(xs) {
    return accumulate(append, null, xs);
}

// d
function oxoguanine_repair(xs) {
    return map(x => x === "8" ? "G" : x, xs);
}

// e
function find_gene_start(xs) {
    return length(xs) <= 3
           ? null
           : head(xs) === "A" && head(tail(xs)) === "T" && head(tail(tail(xs))) === "G"
           ? tail(tail(tail(xs)))
           : find_gene_start(tail(xs));
}

// f
function find_gene_end(xs) {
    function find(xs) {
        return length(xs) < 3
           ? null
           : head(xs) === "T" && head(tail(xs)) === "A" && head(tail(tail(xs))) === "G"
           ? list(null)
           : head(xs) === "T" && head(tail(xs)) === "A" && head(tail(tail(xs))) === "A"
           ? list(null)
           : head(xs) === "T" && head(tail(xs)) === "G" && head(tail(tail(xs))) === "A"
           ? list(null)
           : map(x => pair(head(xs), x), find(tail(xs)));
    }
    
    const result = find(xs);
    return is_null(result)
           ? null
           : is_null(head(result))
           ? list(null)
           : head(result);
}

// g
function all_genes(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        const start = find_gene_start(xs);
        const result = find_gene_end(start);
        return accumulate((x, y) => is_null(x) ? y : pair(x, y), null, pair(result, all_genes(start)));
    }
}

// Task 2

// a
function all_different(xs) {
    return is_null(xs)
           ? true
           : is_null(member(head(xs), tail(xs))) && all_different(tail(xs));
}

// b
function is_in_range(xs, min, max) {
    return length(accumulate((x, y) => min <= x && x <= max ? pair(x, y) : y, null, xs)) === length(xs);
}

function is_valid_toto_set(nums, n, min, max) {
    return all_different(nums) && is_in_range(nums, min, max) && length(nums) === n;
}

// c
function num_of_matches(numsA, numsB) {
    return is_null(numsA) || is_null(numsB)
           ? 0
           : is_null(member(head(numsB), numsA))
           ? num_of_matches(numsA, tail(numsB))
           : 1 + num_of_matches(numsA, tail(numsB));
}

function check_winning_group(bet_nums, draw_nums, extra_num) {
    const extra = num_of_matches(bet_nums, list(extra_num)) === 1;
    const matches = num_of_matches(bet_nums, draw_nums);
    
    if (matches === length(draw_nums)) {
        return 1;
    } else if (matches === length(draw_nums) - 1) {
        return extra ? 2 : 3;
    } else if (matches === length(draw_nums) - 2) {
        return extra ? 4 : 5;
    } else {
        return 0;
    }
}

// Task 3

// a
function evaluate_BAE_tree(bae_tree) {
    if (is_number(bae_tree)) {
        return bae_tree;
    } else {
        const op1 = evaluate_BAE_tree(head(bae_tree));
        const op2 = evaluate_BAE_tree(head(tail(tail(bae_tree))));
        const operator = head(tail(bae_tree));
        
        if (operator === "+") {
            return op1 + op2;
        } else if (operator === "-") {
            return op1 - op2;
        } else if (operator === "*") {
            return op1 * op2;
        } else {
            return op1 / op2;
        }
    }
}

//b
function build_BAE_tree(bae_list) {
    let current = bae_list;
    
    function build_tree() {
        while (!is_null(current)) {
            if (head(current) === "(") {
                current = tail(current);
                const op1 = build_tree();
                const op = head(current);
                current = tail(current);
                const op2 = build_tree();
                current = tail(current);
                return list(op1, op, op2);
            } else {
                const op = head(current);
                current = tail(current);
                return op;
            }
        }
    }
    
    return build_tree();
}













































