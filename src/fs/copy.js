import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  const mainDirPath = __dirname.concat('/files');
  const copyDirPath = __dirname.concat(`/files_copy`);

  fs.readdir(mainDirPath, (err, files) => {
    if (err) {
      throw new Error('FS operation failed');
    } else {
      fs.access(copyDirPath, error => {
        if (!error) {
          throw new Error('FS operation failed');
        } else {
          fs.mkdir(copyDirPath, error => {
            if (error) throw new Error('FS operation failed');
          });

          files.forEach(file => {
            fs.copyFile(mainDirPath.concat(`/${file}`), copyDirPath.concat(`/${file}`), error => {
              if (error) throw new Error('FS operation failed');
            });
          });
        }
      });
    }
  });
};

await copy();
