const parseArgs = () => {
  const argv = process.argv;

	if(argv % 2 !== 0) return;

  for (let i = 0; i < argv.length; i = i + 2) {
    console.log(`${argv[i]} is ${argv[i + 1]}`);
  }
};

parseArgs();
