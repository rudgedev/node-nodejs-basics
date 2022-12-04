import { Transform } from 'stream';

const transform = async () => {
  process.stdin.pipe(reverse).pipe(process.stdout);
};

const reverse = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().split('').reverse().join(''));
    callback();
  },
});

await transform();
