// using fetch() to get data from server

fetch("https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/44418/")
.then(res=> {return res.json()})
.then(res => {
    let dta = JSON.parse(res);
    return dta;
}).then(res => {
    console.log(res.data);
})
.catch(err => console.log(err));

// asynchronouse

 async function lala(loc){
   let hey = await fetch("https://api.allorigins.win/get?url=https://www.metaweather.com/api/location/"+loc+"/");

   let jsn = await hey.json();
   data = JSON.parse(jsn);

   let today = data.constents.data[0];
   console.log(today)
};

lala(415);