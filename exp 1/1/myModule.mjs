//Exporting nested objects and function from Module using exports Object.

export const user = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345"
  }
};

export const settings = {
  theme: "dark",
  notifications: {
    email: true,
    sms: false
  }
};

export function greet(name) {
  return `Hello, ${name}!`;
}



//errors 1.using ES without typing module as type in json so i changes the file name to .mjs extension
//2.importing with wrong path so i changed the path to ./myModule.mjs
//3.first i as using required so i changes that some reference error was coming so i changed it to import statement
//Forgetting to use backticks (`) in
