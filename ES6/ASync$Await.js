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
        1000,
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
        1000,
        ob
      );
    });
  };
  
  // display().then(result=> console.log(`result 1: ${result}`)).catch(error=> console.log(` error 1: ${error}`));
  // getRec(12).then(result=> console.log(result)).catch(error=> console.log(` error 2: ${error}`));
  // author("12.app").then(result=> console.log(result)).catch(error=> console.log(` error 3: ${error}`));
  // OR
  // ES6 promise chaining
  // display().then(ids => {
  //   console.log(ids);
  //   return getRec(ids);
  // }).then(jor => {
  //   console.log(jor);
  //   return author(jor.menu);
  // }).then(e=> {
  //   console.log(e);
  // }).catch(error => console.log(error));
  // OR
  // promise chaining-g ES8-n async & await r hiih ni
  async function pro() {
    try {
  
      const dis = await display();
      console.log(dis);
      const get = await getRec(dis[0]);
      console.log(get);
      let auto = await author(get.menu);
      console.log(auto);
      return auto.app;
  
    } catch (error) {
      console.log(error);
    }
  };
  // async function always return promise: that's why if you return something from async function 
  // always write like below
  pro().then(result=> console.log(`async function always return promise: ${result}`));
  