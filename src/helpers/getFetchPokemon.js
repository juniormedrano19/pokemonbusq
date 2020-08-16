export const getFetchPokemon=async (pokemon)=>{

    const url=`https://pokeapi.co/api/v2/pokemon/${encodeURI(pokemon)}`

    let resp= await fetch(url);
   let data= await resp.json();
   let {sprites,id,name, weight,height}=await data
   const {other} = sprites
   const {'official-artwork':officialArtwork}=other
   const {'front_default':frontDefault}=officialArtwork
   const {'0':cero}=data.types;
  
   const {name: nombreTipo}=cero.type
  
   console.log(data);
const objeto={
    id:id,
    nombre:name,
    url:frontDefault,
    tipo:nombreTipo,
    peso:weight/10,
    alto:height*10,

}
  return objeto


}

