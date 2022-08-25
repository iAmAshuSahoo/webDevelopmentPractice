function forEachCall(elements, callBack) {
  for (let i = 0; i < elements.length; i++) {
    callBack(elements[i]);
  }
}

module.exports = forEachCall;
