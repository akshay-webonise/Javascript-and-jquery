function readKey(val)
{
	document.getElementById("textbox").value+=val;
}

function oper(opera) {         
o = opera
 n= document.getElementById("textbox").value;
document.getElementById("textbox").value = " "
}

function equalTo() {


evaluate(n ,document.getElementById("textbox").value,o);
}

function evaluate(opOne,opTwo,o)
 {
  switch(o)
  {
   case "+":
    	document.getElementById("textbox").value = parseInt(opOne)+parseInt(opTwo);
      break;
   case "-":
     document.getElementById("textbox").value = parseInt(opOne)-parseInt(opTwo);
     break;
  case "*":
     document.getElementById("textbox").value = parseInt(opOne)*parseInt(opTwo);
     break;
case "/":
     document.getElementById("textbox").value = parseInt(opOne)/parseInt(opTwo);
     break;
  }
}

function clrText(val)
{
	document.getElementById("textbox").value=val;
}




function trignometric(val)
{
	if(val="sin")
	{
		inp=document.getElementById("textbox").value;
		clrText(Math.sin(inp));
	}
	if(val="cos")
	{
		inp=document.getElementById("textbox").value;
		clrText(Math.cos(inp));
	}
	if(val="tan")
	{
		inp=document.getElementById("textbox").value;
		clrText(Math.tan(inp));
	}
}
		
