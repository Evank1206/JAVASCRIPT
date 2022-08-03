// Promise
let display = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([12, 34, 56, 78, 87, 23]);
        reject('error');
      }, 1000);
    });
  };
  
  let getRec = ids => {
    return new Promise((resolve, reject) => {
      setTimeout(
        id => {
          resolve({ name: 'Evank', CO: 'company' });
          reject('error');
        },
        2000,
        ids
      );
    });
  };
  
  let author = ob => {
    return new Promise((resolve, reject) => {
      setTimeout(
        o => {
          resolve({ app: 111, menu: 222 });
          reject(`error`);
        },
        3000,
        ob
      );
    });
  };
  
  // display().then(result=> console.log(`result 1: ${result}`)).catch(error=> console.log(` error 1: ${error}`));
  // getRec(12).then(result=> console.log(result)).catch(error=> console.log(` error 2: ${error}`));
  // author(12.app).then(result=> console.log(result)).catch(error=> console.log(` error 3: ${error}`));
  // OR
  // promise chaining 
  display().then(ids => {
    console.log(ids);
    return getRec(ids);
  }).then(jor => {
    console.log(jor);
    return author(jor.menu);
  }).then(e=> {
    console.log(e);
  }).catch(error => console.log(error));
  