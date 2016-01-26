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
   if(str.indexOf(".")<0)
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


var getAnswer= function ()
{
var ans=0;

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
return ans.toFixed(12);

};
  
