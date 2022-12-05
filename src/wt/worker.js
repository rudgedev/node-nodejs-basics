import { parentPort, workerData } from 'worker_threads';

const nthFibonacci = n => (n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2));

const sendResult = () => {
  parentPort.postMessage(`Result from worker_${workerData.worker_number}:${nthFibonacci(workerData.worker_number)}`);
};

sendResult();
