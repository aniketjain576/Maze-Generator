let algorithmInterval: NodeJS.Timeout | null;

export function startAlgorithm(intervalId: NodeJS.Timer) {
  algorithmInterval = intervalId;
}

export function stopAlgorithm() {
  if (algorithmInterval) {
    clearInterval(algorithmInterval);
  }
  algorithmInterval = null;
}
