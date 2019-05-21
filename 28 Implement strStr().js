/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1

*/


//Solution 1: O(N^2)

const strStr = (haystack,needle) => {
    if (needle === '') return 0;
    let allclear = false;
    for(let i = 0; i < haystack.length; i++){
        for(let j = 0; j < needle.length; j++){
            if (haystack[i+j] === needle[j]){
                allclear = true;
            }else{
                allclear = false;
                break;
            }
        } 
        if (allclear){
            return i;
        } 
    }
    return -1;
}

//Solution 2: indexOf method O(N)

const strStr2 = (haystack,needle) => {
    return haystack.indexOf(needle);
}

//Solution 3: Substring method O(N)

const strStr3 = (haystack,needle) => {

    if (!needle) return 0;

    for(let i = 0; i < haystack.length; i++){
        if (haystack.substr(i,needle.length) === needle) return i;
    }
    
    return -1;
}
