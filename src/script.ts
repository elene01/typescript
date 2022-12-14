const movieName = <HTMLInputElement>document.getElementById('movie-name');
const searchBtn = <HTMLInputElement>document.getElementById('search-btn');
const searchBtn2 = <HTMLInputElement>document.getElementById('search-btn2');
const Year = <HTMLInputElement>document.getElementById('released-ans');
const actors_name = <HTMLInputElement>document.getElementById('Actors-ans');
const movieName1 = <HTMLInputElement>document.getElementById('movie-name1')
const movieName2 = <HTMLInputElement>document.getElementById('movie-name2')
const movieName3 = <HTMLInputElement>document.getElementById('movie-name3')

const getMovie = () => {
    let name = movieName.value;
    if (name.length <= 0) {
      movieName.innerHTML = `<h3 class="msg">Please Enter A Movie Name</h3>`;
    }else{
    let url = 'https://www.omdbapi.com/?t=' + name + '&apikey=abf03079';
    fetch(url)
    .then((resp) => resp.json())
      .then((data) => {
  
        //returns names of actors
        function namesOnly() {
            let actors = data.Actors;
            actors = actors.split(' ');
            let resultActors:Array<string>;
            resultActors =[]
            actors.forEach((el:string, ind:number) => {
            if (ind % 2 == 0){
                resultActors.push(' '+el )
            }
        });
        return resultActors.join()
        }

        // year
        let release = new Date().getFullYear() - data.Year;
        async function getCountry(countryName:String){
        let countrys = countryName.split(",")
      
      // returns currencies and flags
        for (let i = 0; i< countrys.length; i++){
        let url = 'https://restcountries.com/v3.1/name/'+ countrys[i].trim() +'?fullText=true'
        let resp = await fetch(url)
        let data = await resp.json()
        let curr = data[0].currencies
        
        let cur: any //
        cur = document.createElement('h4').innerText;
        if (cur != null) { 
          cur = Object.keys(curr);
        }
        document.getElementById('ap')?.append(cur)
        let img = document.createElement('img');
        img.src =data[0].flags.png
        document.getElementById('ap')?.append(img)
        }
      }
      getCountry(data.Country)
      Year.innerHTML =  release + ' years ago';
      actors_name.innerHTML =  namesOnly() ;
    });
 }
};
  
searchBtn.addEventListener('click', getMovie);


   
//task 2

let getMovie2 = () => {
  let name1 = movieName1.value;
  let name2 = movieName2.value;
  let name3 = movieName3.value;

  let url1 = 'https://www.omdbapi.com/?t=' + name1 + '&apikey=abf03079';
  let url2 = 'https://www.omdbapi.com/?t=' + name2 + '&apikey=abf03079';
  let url3 = 'https://www.omdbapi.com/?t=' + name3 + '&apikey=abf03079';
  
  fetch(url1)
    .then((resp) => resp.json())
    .then((data1) => {
      let minutes1 = data1.Runtime.split(' ')[0]
      fetch(url2)
      .then((resp) => resp.json())
      .then((data2) => {
        let minutes2 = data2.Runtime.split(' ')[0]
        fetch(url3)
      .then((resp) => resp.json())
      .then((data3) => {
        let minutes3 = data3.Runtime.split(' ')[0]
        let minutes = +minutes1 + + minutes2 + + minutes3
        let length = document.getElementById('length-ans')
        if (length != null){
          length.innerText = minutes + ' minute'
      }
        async function getCountry(countryName: string){
          let countrys = countryName.split(",")
          let sum = 0;

        // returns population
        for (let i = 0; i< countrys.length; i++){
        let url = 'https://restcountries.com/v3.1/name/'+ countrys[i].trim() +'?fullText=true'
        let resp = await fetch(url)
        let data = await resp.json()
        let curr = await data[0].population
        sum += curr
        return sum
        }
      }
      async function countPopulation(){
        let population1 = await getCountry(data1.Country)
        let population2 = await getCountry(data2.Country)
        let population3 = await getCountry(data3.Country)
        if (population1 && population2 && population3){
        let population =+ population1 + + population2 + + population3
        let ans = document.getElementById('population-ans')
        if(ans != null){
        ans.innerText = population + ' people'
        }
      }
    }
      countPopulation()
        })
      })
    })
  };
  
  searchBtn2.addEventListener('click', getMovie2);
  
  