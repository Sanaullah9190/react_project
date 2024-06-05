import React from "react";

function Card({username, sec="dj",third}){
    return(
        <>
        <p>proprs</p>
            <h1>{username}</h1>
            <h2>{sec}</h2>
            <h3>{third || "hii"}</h3>
        </>
    )
}
export default Card;