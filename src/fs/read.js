import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  const filePath = __dirname.concat(`/files/fileToRead.txt`);

  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      throw new Error('FS operation failed');
    } else {
      console.log(data);
    }
  });
};

await read();
