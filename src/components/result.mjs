import React from "react";
import { useState } from "react";

export function Result({res1}){
    function modify(ele){
        const URL = ele.data.preview.images[0].source.url;
        const modifiedURL = URL.replace(/&amp;/g, '&');
        return modifiedURL;
    }
    function modify2(ele){
        const media_id = ele.data.gallery_data.items[0].media_id;
        let URL='';
        let modifiedURL='';
        if(media_id&&ele.data.media_metadata[`${media_id}`].p[5]){
            URL = ele.data.media_metadata[`${media_id}`].p[5].u;
          modifiedURL = URL.replace(/&amp;/g, '&');
        }
        return modifiedURL;
    }
    return (<>{res1 && (
        <div className="resultblock">
            {res1.data && res1.data.children.map((ele) => (
                <div className="result">
                    <h3 className="title" id="offcanvasLabel">{ele.data.title}</h3>
                    <div className="images">
                        {ele.data.preview && (<img src={modify(ele)} className="img-fluid" alt="..." />)}
                        {ele.data.gallery_data && (<img src={modify2(ele)} className="img-fluid" alt="..." />)}
                    </div>
                    <div className="content">
                        <h5>{ele.data.selftext}</h5>
                    </div>
                    <div className="additionals">
                        <h8><strong>Votes:</strong> {ele.data.score}</h8>
                        <h8><strong>Comments:</strong> {ele.data.num_comments}</h8>
                    </div>
                </div>
            ))}
        </div>
    )}</>)
}