async function async1() {
    let kolkataWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Kolkata Weather is 25 deg");
      }, 7000);
    });
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Bangalore Weather is 30 deg");
      }, 2000);
    });
    
    kolkataWeather.then(alert);
    bangaloreWeather.then(alert);
    
    let kolkataWeather2 = await kolkataWeather;
    let bangaloreWeather2 = await bangaloreWeather;   
    
    console.log(kolkataWeather2);
    console.log(bangaloreWeather2);
  
    return [kolkataWeather2, bangaloreWeather2];
  }
  
  async function main() {
    let a = await async1();
    console.log(a);
  }
  
  main();  