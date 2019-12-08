var questions = [
  {
    prompt: "What Color are Bananas?\n(a) Blue\n\(b) Purple\n(c) Yellow\n(d) Orange",
    answer: "c"
  },
  {
    prompt: "What state only borders one state?\n(a) New York\n\(b) Hawaii\n(c) Alaska\n(d) Maine",
    answer: "d"
  },
  {
    prompt: "What flavor is the green Haribo gummy bear?\n(a) Strawberry\n\(b) Lime\n(c) Green Apple\n(d) Cherry",
    answer: "a"
  },

  {
    prompt: "What Programming Language is named after Coffee?\n(a) Ruby\n\(b) Java\n(c) JavaScript\n(d) Phython",
    answer: "b"
  },
  {
    prompt: "what nut is a member of the Peach family\n(a) Almond\n\(b) Peanuts\n(c) Walnuts\n(d) Pistachio",
    answer: "a"
  },
  {
    prompt: "What Programming Language is named after a British comedy group?\n(a) JavaScript\n\(b) Phython\n(c) Java\n(d) Ruby",
    answer: "b"
  },
  {
    prompt: "What state has the most NFL teams?\n(a) Florida\n\(b) New York\n(c) California\n(d) Oregon",
    answer: "c"
  },
  {
    prompt: "Where was Hawaiian pizza invented?\n(a) Hawaii\n\(b) Canada\n(c) England\n(d) Middle-Earth",
    answer: "b"
  },
  {
    prompt: "What programming language runs in all browsers and requires no installation?\n(a) JavaScript\n\(b) Ruby\n(c) Java\n(d) Phython",
    answer: "a"
  }
 });
var score =0;


for(var i=0; i < questions.length; i++){
var response = window.prompt(questions[i].prompt);
if(response == questions[i].answer){
  score++;
  alert("Nice Job! You got it right.");
}
else if{
  alert("Sorry that is wrong!");
}

alert("you got" + score + "/" + questions.length);

}
});
