function getParagraph1()
{
  var inputs = [];


for(var i=1; i<=6; i++)
{
  inputs.push(document.getElementById("para1_input_box" + i).value);
}
  document.getElementById("showParagraph1").innerHTML = inputs.join(".");
}


