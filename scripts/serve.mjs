import http from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";

const root = process.cwd();
const basePort = process.env.PORT ? Number(process.env.PORT) : 5173;
const host = process.env.HOST ?? "127.0.0.1";

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

const server = http.createServer(async (req, res) => {
  try {
    const urlPath = (req.url ?? "/").split("?")[0];
    const filePath = urlPath === "/" ? "/index.html" : urlPath;
    const full = join(root, filePath);

    const data = await readFile(full);
    const type = mime[extname(full)] ?? "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
});

function listenWithFallback(startPort, attempts = 10) {
  return new Promise((resolve, reject) => {
    let tried = 0;

    const tryListen = (port) => {
      const onError = (err) => {
        server.off("listening", onListening);

        if (err && err.code === "EADDRINUSE" && tried < attempts) {
          tried += 1;
          tryListen(port + 1);
          return;
        }
        reject(err);
      };

      const onListening = () => {
        server.off("error", onError);
        resolve(port);
      };

      server.once("error", onError);
      server.once("listening", onListening);
      server.listen(port, host);
    };

    tryListen(startPort);
  });
}

try {
  const port = await listenWithFallback(basePort);
  console.log(`Server running: http://${host}:${port}`);
} catch (err) {
  console.error("Failed to start server:", err);
  process.exitCode = 1;
}
