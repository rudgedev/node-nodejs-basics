import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
		const filePath = __dirname.concat(`/files/fresh.txt`);
		const text = 'I am fresh and young';

		fs.writeFile(filePath, text, (error) => {
			if(error) {
				throw new Error('FS operation failed')
			} else {
				console.log('norm')
			}
		})
};

await create();
