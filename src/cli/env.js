const parseEnv = () => {
  const env = process.env;
  if (!env) return;

  const prefix = /^RSS_/;

  Object.entries(env).forEach(([key, value]) => {
    if (prefix.test(key)) {
      console.log(`${key}=${value}`);
    }
  });
};

parseEnv();
