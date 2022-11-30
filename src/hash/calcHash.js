import { createHash } from 'crypto';
import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
  const filePath = __dirname.concat('/files/fileToCalculateHashFor.txt');
	
  fs.readFile(filePath, (error, data) => {
    if (error) {
      throw new Error('FS operation failed');
    } else {
      console.log(createHash('sha256').update(data).digest('hex'));
    }
  });
};

await calculateHash();
