var val1=0;
var val2=0;
var x;
var dot=0;

   
var setval1 = function  (v)
  {
	val1=v;

   
  };
  
var setval2 = function  (v)
  {
	val2=v;
   
  };

var setx = function  (v)
  {
      	x=v;

};

var clearVal =function()
{
 val1=0;
val2=0;
x='';
dot=0;

};

var handelDot=function(str)
{

   if(str.indexOf('.')<0)
   {
	return '.';
   }
   else
   {
    return '';
   }
};
	
var clearDot = function()
{
 dot=0;
};

/**
 * Function that could be used to round a number to a given decimal points. Returns the answer
 * Arguments :  number - The number that must be rounded
 *				decimal_points - The number of decimal points that should appear in the result
 */
var roundNumber=function (number,decimal_points) {
	if(!decimal_points) return Math.round(number);
	if(number == 0) {
		var decimals = "";
		for(var i=0;i<decimal_points;i++) decimals += "0";
		return "0."+decimals;
	}

	var exponent = Math.pow(10,decimal_points);
	var num = Math.round((number * exponent)).toString();
	return num.slice(0,-1*decimal_points) + "." + num.slice(-1*decimal_points)
};



var getAnswer= function ()
{
var ans=0;
var end=0;
var i=0;

switch(x)
{
 case '+':
   ans=(val1*1)+(val2*1);
break;
 case '-':
   ans=val1-val2;
break;
 case '*':
   ans=val1*val2;
break;
 case '/':
   ans=val1/val2;
break;

}

if(ans % 1 === 0)
{
 return ans;
}
else
{
 ans=roundNumber(ans,12);//.toFixed(9);
 for(i=0;(i<12) && (end===0);i++)
 {

  if(ans.substring(ans.length-1,ans.length)==='0')
  {
   ans=ans.substring(0,ans.length-1) 
  }
  else
  {
   end=1;
  }
     
 }


 return ans;
}
};

