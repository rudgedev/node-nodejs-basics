import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const write = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const filePath = __dirname.concat('/files/fileToWrite.txt');

  let writeableStream = fs.createWriteStream(filePath);
  process.stdin.on('data', data => {
    writeableStream.write(data);
    process.exit();
  });
};

await write();
