
const periodicUpdate = (delay, wait, cb) => {
  if (wait) {
    let stop = false;
    const clear = () => stop = true;

    const update = () => {
      setTimeout(() => {
        cb();
        if (!stop) update();
      }, delay);
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
