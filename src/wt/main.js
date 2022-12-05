import os from 'os';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const workerFilePath = __dirname.concat('/worker.js');

  const cpus = os.cpus();

  const number = 10;

  console.log(cpus.length);
  cpus.forEach((cpu, index) => {
    const worker = new Worker(workerFilePath, {
      workerData: {
        worker_number: number + index,
      },
    });

    worker.on('message', message => {
      console.log({ status: 'resolved', data: message });
    });

    worker.on('error', () => {
      console.log({ status: 'error', data: null });
    });
  });
};

await performCalculations();
