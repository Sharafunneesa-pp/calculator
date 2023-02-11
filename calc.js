// 1.display numbes in text box
function displayNum(num)
{
display.value+=num
}
// 2.clear text box
function clearBox()
{
    display.value=""
}
// 3.evaluate expression
function evaluateExpr()
{
    // eval is used to find the value of expression.exoression is in display.value.display is the id name of clear button
    expr=display.value
    output=eval(expr)
    display.value=output
}
// 4.remove an item from text Box
function removeItem()
{
    curexp=display.value
    display.value=curexp.slice(0,-1)
}