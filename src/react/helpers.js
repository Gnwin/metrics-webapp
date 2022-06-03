/* eslint-disable */
const arrange = (arr, arr1) => {
  let sorted = false;
  do {
    let exchanged = false;
    for (let i = 0; i < arr.length; i += 1) {
      if (i === arr.length - 1) {
        break;
      }
      const fv = arr[i];
      const fv1 = arr1[i];
      const nv = arr[i + 1];
      const nv1 = arr1[i + 1];
      if (fv < nv) {
        arr[i] = nv;
        arr1[i] = nv1;
        arr[i + 1] = fv;
        arr1[i + 1] = fv1;
        exchanged = true;
      }
    }
    sorted = !exchanged ? true : false;
  }

  while (sorted === false);
  return [arr, arr1];
};

export default arrange;
