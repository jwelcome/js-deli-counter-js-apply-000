var katzDeli = [];

var number = 1;

const takeANumber = function(katzDeliLine, number) {
  
  var number += 1;
  
  katzDeliLine.push(number);
  
  console.log("Welcome, " + number + ". You are number " + katzDeliLine.length + " in line.");
  
  return "Welcome, " + number + ". You are number " + katzDeliLine.length + " in line.";
  
} 


const nowServing = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    console.log("There is nobody waiting to be served!");
    return "There is nobody waiting to be served!";
  } else {
    var name = katzDeliLine[0];
    katzDeliLine.splice(0,1);
    console.log("Currently serving " + name + ".");
    return "Currently serving " + name + ".";
  }
}


const currentLine = function(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var lineArray = [];
  
  for (var i = 0; i < katzDeliLine.length; i++) {
    lineArray.push(i+1 + ". " + katzDeliLine[i]);
  }
  console.log("The line is currently: " + lineArray);
  return "The line is currently: " + lineArray.join(', ');
}