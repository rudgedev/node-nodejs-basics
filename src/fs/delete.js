import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
  const filePath = __dirname.concat('/files/fileToRemove.txt');

  fs.unlink(filePath, error => {
    if (error) throw new Error('FS operation failed');
  });
};

await remove();
