
  function one() {
    console.log("one");
    two()
  }

  function two() {
    console.log("two");
    three();
  }

  function three() {
    console.log("three");
    four()
  }

  function four() {
    console.log("four");
  }

  // one()


function box(step) {
  console.log(step);

  if (step === 4) return;   // stop opening boxes

  box(step + 1);           // open the next box
}

box(1);



