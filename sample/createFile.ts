const encoder = new TextEncoder();

const greetText = encoder.encode("Hello Bapdich");

await Deno.writeFile('greet.txt', greetText);