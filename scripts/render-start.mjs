import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

const port = process.env.PORT ?? "10000";
const next = fileURLToPath(
  new URL("../node_modules/next/dist/bin/next", import.meta.url),
);
const child = spawn(
  process.execPath,
  [next, "start", "--hostname", "0.0.0.0", "--port", port],
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
