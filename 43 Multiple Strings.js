/*
Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

function karatSuba(x,y)
{

  var base,m;
  base  = 10;

  if((parseInt(x)<base)||(parseInt(y)<base)){
    //console.log( " X - y = " , x,y, x*y)
    return x * y;
  }

  var int1 = x.toString();
  var int2 = y.toString();

  var n = (int1.length > int2.length) ? int2.length : int1.length;
  m = Math.round(n/2);

  var a = parseInt(int1.substring(0,int1.length-m));
  var b = parseInt(int1.substring(int1.length-m,int1.length));

  var c = parseInt(int2.substring(0,int2.length-m)); 
  var d = parseInt(int2.substring(int2.length-m,int2.length));

  var s1   =   karatSuba(a,c);
  var s2   =   karatSuba(a+b, c+d);
  var s3   =   karatSuba(b,d);

  var res  =   (s1 *  Math.pow(10, 2 * m )) + ( (s2-s1-s3) * Math.pow(10,  m )) + s3;

  return res;

 }
