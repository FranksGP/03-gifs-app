import axios from 'axios';
import type { GiphyResponse } from '../interface/giphy.response';



export const getGifsByQuery = async(query: string) => {
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: { 
            q: query,
            limit:10,
            lang: 'es',
            api_key: 'G1wkAJHJ9IiiSewaC9k6BStGH6pYTu5w'
        }

    });

  fetch(`https://api.giphy.com/v1/gifs/search?api_key=G1wkAJHJ9IiiSewaC9k6BStGH6pYTu5w&q=${query}&limit=10&lang=es&bundle=messaging_non_clips`
  );
};
