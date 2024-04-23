    import React from "react"
    
    
    const NestedLists = () => {
    const IPLTeams =["CSK","MI","RCB","KKR"]
    const IPLMeans = ["INDIAN PERMIER LEAGUE"]
    const IPLIMAGE = "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg"
    const CSSImage = {
        width: 300
    }
    const IPLHistory = [

                {
                    name : "CSK",
                    Players :[ "MSD","Raina"],
                    Staff :["mike","steven"]
                }
                ,
                {
                    name : "RCB",
                    Players :[ "VK","DK"],
                    Staff :["Hesson","Don"]
                }


    ]

    return (
        <div>
        <h1>{IPLMeans}</h1>
        <img src={IPLIMAGE} height={150} width={CSSImage.width} alt ="imageofcap"></img>
        <ul>
            <li className="IPLlisting">{IPLTeams[0]}</li>
            <li className="IPLlisting">{IPLTeams[1]}</li>
            <li className="IPLlisting">{IPLTeams[2]}</li>
            <li className="IPLlisting">{IPLTeams[3]}</li>
        </ul>

        <React.Fragment>
            <li className="IPLliststeams">{IPLHistory[0].name}</li>
            <li className="IPLliststeams">{IPLHistory[0].Players[0]    }</li>
            <li className="IPLliststeams">{IPLHistory[0].Staff}</li>
        </React.Fragment>

    </div>
    
)

}

export default NestedLists