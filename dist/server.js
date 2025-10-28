"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((request, response) => {
    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, { "content-type": "text/html" });
        response.end("<h1>Home</h1>");
        return;
    }
    if (request.url === "/about" && request.method === "GET") {
        response.writeHead(200, { "content-type": "text/html" });
        response.end('<h1>About</h1>');
        return;
    }
    if (request.url === "/my-account" && request.method === "GET") {
        response.writeHead(403, { "content-type": "text/plain" });
        response.end('You have no access to this page');
        return;
    }
    response.writeHead(404, { "content-type": "text/plain" });
    response.end("Page not found");
    return;
});
server.listen(3031, () => {
    console.log("Server is running on port 3031...");
});
