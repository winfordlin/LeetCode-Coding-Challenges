/*
Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWordsIII = function(s) {
    let word = " ";
    let stringarr = s.split(' ');
    
    for(let i = 0; i < stringarr.length; i++){
            word += `${reverse(stringarr[i])} `
    }
    return word.slice(1,word.length-1);
};

function reverse(string){
    let stringarray = string.split('');
    let left = 0;
    let right = stringarray.length-1;

    while(left <= right){
        [stringarray[left], stringarray[right]] = [stringarray[right], stringarray[left]];
        left++;
        right--;
    }

    return stringarray.join('');
}
