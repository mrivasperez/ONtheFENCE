// true if over 18
const isAdult = x => {
  if (x >= 18) {
    return true;
  }
  return false;
};

// true if over 21
const canDrink = x => {
  if (x >= 21) {
    return true;
  }
  return false;
};

export { isAdult, canDrink as default };
