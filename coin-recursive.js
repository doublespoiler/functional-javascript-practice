  const coinCounter = (amt) => {
  if (isNaN(amt)){ //termination condition
    return "NaN";
  }

  if (amt == 0) { //base case (when we want to end)
    return "finished";
  } else { //the recursion
    if(amt >= 0.25) {
      console.log(amt + "before");
      console.log(Math.floor(amt / 0.25) + " quarters");
      newAmt = amt - Math.floor((amt / 0.25)) * 0.25;
      console.log(newAmt + "after");
    }
    // else if(amt >= 0.1) {
    //   console.log(amt + "before");
    //   console.log(Math.floor(amt / 0.1) + " dimes");
    //   newAmt = amt - Math.floor((amt / 0.1) * 0.1);
    //   console.log(newAmt + "after");
    // }
    // else if(amt >= 0.05) {
    //   console.log(amt + "before");
    //   console.log(Math.floor(amt / 0.05) + " nickels");
    //   newAmt = amt - Math.floor((amt / 0.05) * 0.05);
    //   console.log(newAmt + "after");
    // }
    // else if(amt >= 0.01) {
    //   console.log(Math.floor(amt / 0.01) + " pennies");
    //   console.log(amt + "before");
    //   newAmt = amt - Math.floor((amt / 0.01) * 0.01);
    //   console.log(newAmt + "after");
    // }
    return coinCounter(newAmt);
  }
}

module.exports = {coinCounter};
