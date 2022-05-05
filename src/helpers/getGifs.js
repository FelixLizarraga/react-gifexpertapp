import { useFetchGifs } from "../hooks/useFetchGifs";


export const getGifs = async ( category ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=rFd5xeETitddfdA0Uj4l6SPn7E1bvyDm`
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {

        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }   
    })

    return gifs;
}
