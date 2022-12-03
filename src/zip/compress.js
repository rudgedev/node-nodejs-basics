import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createReadStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { createWriteStream } from 'fs';
import { promisify } from 'util';
import { pipeline } from 'stream';

const pipe = promisify(pipeline);

const compress = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const sourcePath = __dirname.concat('/files/fileToCompress.txt');
  const destinationPath = __dirname.concat('/files/archive.gz');

  const gzip = createGzip();
  const source = createReadStream(sourcePath);
  const destination = createWriteStream(destinationPath);

  await pipe(source, gzip, destination);
};

await compress().catch(error => {
  console.error('An error occured: ', error);
  process.exitCode = 1;
});
