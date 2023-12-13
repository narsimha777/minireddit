const get_Data={
    async get_Subreddits(){
        const res = await fetch("https://www.reddit.com/subreddits.json").then((response) => { 
        if (response.error === 404)
        { throw new Error('Content not Available') } 
        else{
            return response.json();
        }
    }).catch((error)=>{
        console.log('Error: ',error);
    })
    return res;
    },
    async get_Searchresults(search){
        const res = await fetch(`https://www.reddit.com/r/${search}.json`).then((response) => { 
            if (response.error === 404)
            { throw new Error('Content not Available') } 
            else{
                return response.json();
            }
        }).catch((error)=>{
            console.log('Error: ',error);
        })
        return res;
    }
}

export default get_Data;

