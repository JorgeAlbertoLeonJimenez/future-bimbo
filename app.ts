function sayHiFromFuction(fn: (name: string) => void) {
  return fn("miguel");
}

const sayHi = (name: string) => {
  console.log("hola", name);
};

sayHiFromFuction(sayHi);
