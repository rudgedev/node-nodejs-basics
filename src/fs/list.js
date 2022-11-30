import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
  const filePath = __dirname.concat('/files');

  fs.readdir(filePath, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      files.forEach(file => {
        console.log(file);
      });
    }
  });
};

await list();
