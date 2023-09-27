const simpleArray = [ 
    "Rick", "Morty", "Jerry", "Beth", "Summer", "Mr. Meeseeks", "Birdperson", "Squanchy", 
    "Tammy", "Unity", "Evil Morty", "Phoenixperson", "Noob Noob", "Abradolf Lincler", 
    "Pickle Rick", "Scary Terry", "Mr. Poopybutthole", "Snowball", "Mr. Goldenfold", "Jessica"
  ];
  
  const objectArray = [
    {
      firstName: "Erica",
      lastName: "Davenhill",
      age: 62,
      gender: "Female",
      city: "Le Bourget-du-Lac",
    },
    {
      firstName: "Alissa",
      lastName: "Shakshaft",
      age: 94,
      gender: "Female",
      city: "Tangzhuang",
    },
    {
      firstName: "Viva",
      lastName: "Bishopp",
      age: 2,
      gender: "Female",
      city: "Abengourou",
    },
    {
      firstName: "August",
      lastName: "Bend",
      age: 40,
      gender: "Male",
      city: "Natarleba",
    },
    {
      firstName: "Bartholomeo",
      lastName: "Cosens",
      age: 29,
      gender: "Male",
      city: "Madrid",
    },
    {
      firstName: "Luci",
      lastName: "Dudenie",
      age: 51,
      gender: "Female",
      city: "Mayisyan",
    },
    {
      firstName: "Cris",
      lastName: "Diver",
      age: 58,
      gender: "Male",
      city: "Jinhe",
    },
    {
      firstName: "Rawley",
      lastName: "Trappe",
      age: 34,
      gender: "Male",
      city: "Madrid",
    },
    {
      firstName: "Lavena",
      lastName: "Devall",
      age: 16,
      gender: "Female",
      city: "Dolní Sloupnice",
    }
  ];

  //Transforma la lista simple para que todas las letras sean mayusculas
  function toUpperCase(array){
    return array.map((element) => {
        return element.toUpperCase()
      }
    )
  }

  //Transforma la lista para que solo devuelva nombre y serie
  function listaObjetosSimple(array){
    return array.map(( element) => {
        return{
          name: element,
          serie: "RickYMorty"
        }
      }
    )
  }

  function lista2(array){
    return array.map((element) => {
      return{

        fullName: `${element.firstName} ${element.lastName}`,
        description: `${element.firstName} is ${element.age} years old and lives in ${element.city}. Pronoun: ${element.gender === 'Female' ? 'she' : 'he'}  `
      }
    }
  )
  }

  const funcion = (search,gender)=>{
    let busqueda= objectArray.filter(
      e=>{
        return e.firstName.startsWith(search) && e.gender==gender
      }
    )
    return busqueda
  }

// # Encontrando el índice de la persona que viva en Madrid en la lista de objetos.
function indiceMadrid(objectArray){
  return objectArray.findIndex(
    element=>{
      return element.city==="Barcelona"
    }
  )
}
  console.log(indiceMadrid(objectArray))