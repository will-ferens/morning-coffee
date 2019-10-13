const axios = require('axios');

const HN_URL = 'https://hacker-news.firebaseio.com/v0';


async function getHNTopIds() {
    
    const topStoryIds = await axios.get(`${HN_URL}/topstories.json`, { headers: { Accept: 'application/json' } })
    .then(res => {
        return res.data.slice(0, 11);
    })
    .catch(error => {
        console.log(error);
    })

    return topStoryIds;
}





module.exports = {
    getHNTopIds,
    HN_URL
}