
const periodicUpdate = (delay, wait, cb) => {
  if (wait) {
    let stop = () => false;
    const clear = () => stop();
    
    const update = () => {
      const timeout = setTimeout(() => {
        cb();
        update();
      }, delay);
      stop = () => clearTimeout(timeout);
    };
    update();
    
    return clear;
  } else {
    const interval = setInterval(() => {
      cb();
    }, delay);

    const clear = () => clearInterval(interval);
    return clear;
  }
};

module.exports = {
  periodicUpdate,
};
