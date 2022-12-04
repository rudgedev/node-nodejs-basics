import { fork } from 'child_process';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async args => {
  const scriptPath = __dirname.concat('/files/script.js');

  const child = fork(scriptPath);
  child.on('message', () => {
    process.stdout.write(args);
  });

  child.send(process.stdin);
};

spawnChildProcess();
