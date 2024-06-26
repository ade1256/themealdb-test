const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const bilanganPrima = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

readline.question('Masukkan angka: ', (number) => {
  const isPrime = bilanganPrima(parseInt(number));
  console.log(`${number} adalah bilangan prima: ${isPrime ? 'Ya' : 'Tidak'}`);
  readline.close();
});