import { spawn } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const port = process.env.PORT ?? "10000";
const wrangler = fileURLToPath(
  new URL("../node_modules/wrangler/bin/wrangler.js", import.meta.url),
);
const envLoader = fileURLToPath(new URL("./sites-env.mjs", import.meta.url));

const child = spawn(
  process.execPath,
  [
    "--import",
    pathToFileURL(envLoader).href,
    wrangler,
    "dev",
    "--config",
    "dist/server/wrangler.json",
    "--local",
    "--persist-to",
    ".wrangler/state",
    "--ip",
    "0.0.0.0",
    "--port",
    port,
    "--inspector-port",
    "0",
  ],
  { stdio: "inherit" },
);

child.on("error", (error) => {
  console.error("Failed to start the Render web service.", error);
  process.exitCode = 1;
});

child.on("exit", (code, signal) => {
  if (signal) process.kill(process.pid, signal);
  else process.exit(code ?? 1);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
