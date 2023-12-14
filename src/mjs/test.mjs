import get_Data from "./data.mjs";

export const res =await get_Data.get_Searchresults("popular");
// console.log(res.data.children.length);
// console.log(res.data.children[0].data.title)
// const URL = res.data.children[9].data.preview.images[0].source.url;
// console.log(URL.toString());
// const media_id = res.data.children[9].data.gallery_data.items[0].media_id
// console.log(media_id);
// const URL = res.data.children[9].data.media_metadata[`${media_id}`].p[5].u;
// console.log(URL);
// const modifiedURL = URL.replace(/&amp;/g, '&');
// console.log(modifiedURL);
// console.log(res.data.children[0].data.selftext);
// console.log(res.data.children[0].data.score);
// console.log(res.data.children[0].data.num_comments);
