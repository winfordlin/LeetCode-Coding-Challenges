/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!


Java Solution

public class Solution extends GuessGame {
    public int guessNumber(int n) {
       return startGuessing(0, n);
    }
    
    public int startGuessing(int start, int end) {
        int myGuess = start + (end - start) / 2;
        if(this.guess(myGuess) == 0) return myGuess;
        if(this.guess(myGuess) == -1) return startGuessing(start, myGuess - 1);
        return startGuessing(myGuess + 1, end);
    }
}
*/


function guess(num){
    return guessGame(0,num);
}


function guessGame(start,end){
    let myGuess = end + ((start-end)/2)
    if (this.guess === 0) return myGuess;
    if (this.guess === - 1) return guessGame(start,myGuess-1);
    if (this.guess === 1) return guessGame(myGuess+1,end);
}