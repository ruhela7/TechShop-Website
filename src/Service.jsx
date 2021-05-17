import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";


const Service = () => {
    return <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
            <div className="row mt-4">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                            Sdata.map((val, index) => {
                                return <Card
                                    key={index}
                                    imgSource={val.imgSrc}
                                    titleName={val.imgTitle}
                                />
                            })
                        }
                    </div>
                </div>
            </div>


        </div>
    </>
}

export default Service;