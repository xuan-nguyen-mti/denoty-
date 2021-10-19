import { listenAndServe } from "https://deno.land/std/http/server.ts";

// listenAndServe("8080", async (req) => {
//     if (req.method === 'GET' && req.url === '/') {
//         req.respond({
//             status: 200,
//             headers: new Headers({
//                 'content-type': 'text/html',
//             }),
//             body: await Deno.open('./index.html')
//         })
//     }
// })

// console.log("Deno is running on port 8080")


// listenAndServe(":8000", () => new Response("Hello World\n"));

// console.log("http://localhost:8000/");

listenAndServe({ port: 3000 }, async (req) => {
  if (req.method === 'GET' && req.url === '/') {
    req.respond({
      status: 200,
      headers: new Headers({
        'content-type': 'text/html',
      }),
      body: await Deno.open('./index.html'),
    })
  }
})