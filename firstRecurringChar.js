//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  const newSet = new Set();
  for (let el of input) {
    if (!newSet.has(el)) {
      newSet.add(el);
    } else {
      console.log("found it", el);
      return el;
    }
  }
  return undefined;
}

firstRecurringCharacter([1]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
