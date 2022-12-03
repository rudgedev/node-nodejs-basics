import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';

const pipe = promisify(pipeline);

const decompress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourcePath = __dirname.concat('/files/archive.gz');
  const destinationPath = __dirname.concat('/files/fileToCompress2.txt');

  const unzip = createUnzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipe(source, unzip, destination);
};

await decompress().catch(error => {
  console.error('An error occured: ', error);
  process.exitCode = 1;
});
