// boolean (true/false)
let isLoading = false;
isLoading = Boolean("true");
isLoading = true;

// string (`foo`, 'foo', "foo")
let message: string;
message = `The status is: ${isLoading}`;

// number
let ranking: number;
ranking = 23;

// array (type[])
let titles: string[];
titles = ["Carlos", "Ana"];

let total: Array<number>;
total = [23, 40e2, 21];

// tuple
let key: [number, string, boolean];
key = [0, "0jkoiowe321", true];

// enum
enum Colors {
  white = "#ffffff",
  black = "#000000",
  red = "#ff0000",
}

// any - não recomendável
let otherStuff: any;
otherStuff = 32;
otherStuff = [true, false];

// void (vazio)
function logger(): void {
  console.log("logged");
}

// null | undefined
type location = string | undefined;

// never
function error(): never {
  throw new Error("Error");
}

// object
let cart: object;
cart = {
  id: 2,
  name: "Smartphone",
};
