function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    /* eslint no-param-reassign: "error" */
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(++counter));
  setCounter(0);
}

export default setupCounter;
