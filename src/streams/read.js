import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = __dirname.concat('/files/fileToRead.txt');

  let readableStream = fs.createReadStream(filePath);
  readableStream.on('data', chunk => {
    process.stdout.write(chunk);
  });
};

await read();
