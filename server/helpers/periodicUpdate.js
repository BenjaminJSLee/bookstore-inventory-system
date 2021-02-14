
const periodicUpdate = (delay, wait, cb) => {
  if (wait) {
    let stop = () => false;
    
    const update = () => {
      const timeout = setTimeout(() => {
        cb();
        update();
      }, delay);
      stop = () => clearTimeout(timeout);
    };
    update();
    
    const clear = () => stop();
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
