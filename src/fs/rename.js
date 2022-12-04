import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
  const wrongFilePath = __dirname.concat('/files/wrongFilename.txt');
  const properFilePath = __dirname.concat('/files/properFilename.md');

  fs.rename(wrongFilePath, properFilePath, error => {
    if (error) throw new Error('FS operation error');
  });
};

await rename();
