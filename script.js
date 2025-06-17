function fibonacci(num) {
// your code here
  const sequence = [0, 1];
  for (let i = 2; i < nums; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence.slice(0, nums);
}

module.exports = fibonacci;
