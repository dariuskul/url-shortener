import axios from "axios";
const url = 'https://api.shrtco.de/v2/shorten';


export async function shortenLink(link){
    try {
        const {data: {result}} = await axios.get(`${url}?url=${link}`,{
        })
        return await result;
    } catch (error) {
        alert(error)
    }
}