/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

const valid = (res) => {

    let mapping = { 
        ")": "(",
        "]": "[",
        "}": "{"
    };

    let stack = [];
    for(let i = 0; i < res.length; i++){
        if (res[i] === "(" || res[i] === "[" || res[i] === "{"){
            stack.push(res[i]); 
        } else {
            if (stack[stack.length-1] === mapping[res[i]]){
                stack.pop();
            } else return false;
        }
    }
    return stack;  
}

