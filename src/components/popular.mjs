import React from "react";
import { res } from "../mjs/test.mjs";

export function Popular() {
    function modify(ele) {
        const URL = ele.data.preview.images[0].source.url;
        const modifiedURL = URL.replace(/&amp;/g, '&');
        return modifiedURL;
    }
    function modify2(ele) {
        const media_id = ele.data.gallery_data.items[0].media_id;
        let URL='';
        let modifiedURL='';
        if(media_id&&ele.data.media_metadata[`${media_id}`].p[5]){
            URL = ele.data.media_metadata[`${media_id}`].p[5].u;
          modifiedURL = URL.replace(/&amp;/g, '&');
        }
        return modifiedURL;
    }

    // console.log(res.data.children[0].data.title);

    return (
        <>
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="popularblock">
                    <div className="carousel-item active">
                       {res.data.children[0].data.preview&&(<img src={modify(res.data.children[0])} className="d-block w-100" alt="..."/>)}
                       {res.data.children[0].data.gallery_data&&(<img src={modify2(res.data.children[0])} className="d-block w-100" alt="..."/>)}
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="carosl">{res.data.children[0].data.title}</h5>
                                <p className="text">{res.data.children[0].data.selftext}</p>
                            </div>
                    </div>
                    {res.data.children.map((ele,id)=>(
                        <>{id!==0&&(
                            <div className="carousel-item">
                                {/* <h3 className="carosl">{ele.data.title}</h3> */}
                                {ele.data.preview && (<img src={modify(ele)} style={{ opacity: "0.5" }} className="d-block w-100" alt="..." />)}
                                {ele.data.gallery_data && (<img src={modify2(ele)} className="d-block w-100" alt="..." />)}
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="carosl">{ele.data.title}</h5>
                                    <p className="text">{ele.data.selftext}</p>
                                </div>
                                {/* <h5 className="text">{ele.data.selftext}</h5> */}
                            </div>
                        )}</>
                    ))}</div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="..." className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5></h5>
                                <p></p>
                            </div>
                    </div>
                    <div className="popularblock">
                    {res.data.children.map((ele)=>(
                    <div className="carousel-item">
                        {ele.data.preview&&(<img src={modify(ele)} className="d-block w-100" alt="..."/>)}
                        {ele.data.gallery_data&&(<img src={modify2(ele)} className="d-block w-100" alt="..."/>)}
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{ele.data.title}</h5>
                                <p>{ele.data.selftext}</p>
                            </div>
                    </div>))}</div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
            </div> */}
        </>
    )
}

