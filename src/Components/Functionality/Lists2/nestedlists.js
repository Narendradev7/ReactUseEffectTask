    import React from "react"
    
    
    const NestedLists = () => {
    // const IPLTeams =["CSK","MI","RCB","KKR","RR"]
    const IPLHistory = [

                        {
                            name : "CSK",
                            Players :[ "MSD","Raina"],
                            Staff :["mike hussey","steven fleming"],
                            totalscore:1000,
                            image : "https://pabitraeditography.com/wp-content/uploads/2023/03/full-hd-csk-wallpaper8-min-537x1024.jpg"
                        }
                        ,
                        {
                            name : "RCB",
                            Players :[ "VK","DK"],
                            Staff :["Hesson","Don"],
                            totalscore:500,
                            image :"https://w0.peakpx.com/wallpaper/1021/408/HD-wallpaper-virat-rcb-virat-kholi-thumbnail.jpg"
                        }
                        ,
                        {
                            name : "MI",
                            Players :[ "ROHIT","SKY"],
                            Staff :["Sachin","Malinga"],
                            totalscore:600,
                            image :"https://pbs.twimg.com/media/C-fwdyLXoAACFFz.jpg"
                        },
                        {
                            name : "KKR",
                            Players :[ "NARINe","SALT"],
                            Staff :["GG","BA"],
                            totalscore:600,
                            image :"https://i.pinimg.com/originals/16/86/48/168648339bbecb1ad59de36f59c79c9e.jpg"
                        }
            ]
        
    
    return (
        
        <React.Fragment>  
           {
                IPLHistory.map((value,index)=>
                {
                    const {name,Players,Staff,totalscore,image}=value
                    return(
                <>
                { value.totalscore>0 &&
                        <>
                        <h2>{index+1} .{name}</h2>
                        {
                            Players.map(player=>
                            <>
                            <h4>{player}</h4>
                            </>
                            )
                        }
                        {
                            Staff.map(staff=>
                                <>
                                <h4>{staff}</h4>
                                </>
                            )
                        }

                        {
                                <>
                                <h4>{totalscore}</h4>
                                </>
                        }
                        {
                                <>
                                <img src={image} height={150} width={100} alt ="imageofcap"></img>
                                </>

                        }


                        </>
               
                    }
                </>
                    )
                }
            )
           }
        </React.Fragment>

)

}

export default NestedLists

// const IPLMeans = ["INDIAN PERMIER LEAGUE"]
//     const IPLIMAGE = "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg"
//     const CSSImage = {
//         width: 300
//     }
//     const IPLHistory = [

//                 {
//                     name : "CSK",
//                     Players :[ "MSD","Raina"],
//                     Staff :["mike","steven"]
//                 }
//                 ,
//                 {
//                     name : "RCB",
//                     Players :[ "VK","DK"],
//                     Staff :["Hesson","Don"]
//                 }


//     ]


    // <h1>{IPLMeans}</h1>
    //     <img src={IPLIMAGE} height={150} width={CSSImage.width} alt ="imageofcap"></img>
    //     <ul>
    //         <li className="IPLlisting">{IPLTeams[0]}</li>
    //         <li className="IPLlisting">{IPLTeams[1]}</li>
    //         <li className="IPLlisting">{IPLTeams[2]}</li>
    //         <li className="IPLlisting">{IPLTeams[3]}</li>
    //     </ul>


//     mappingconcepts


//     import React from "react"
    
    
//     const NestedLists = () => {
//     // const IPLTeams =["CSK","MI","RCB","KKR","RR"]
//     const IPLHistory = [

//                         {
//                             name : "CSK",
//                             Players :[ "MSD","Raina"],
//                             Staff :["mike hussey","steven fleming"],
//                             totalscore:1000
//                         }
//                         ,
//                         {
//                             name : "RCB",
//                             Players :[ "VK","DK"],
//                             Staff :["Hesson","Don"],
//                             totalscore:500
//                         }
//                         ,
//                         {
//                             name : "MI",
//                             Players :[ "ROHIT","SKY"],
//                             Staff :["Sachin","Malinga"],
//                             totalscore:600
//                         }
        
        
//             ]
        
    
//     return (
        
//         <React.Fragment>
//            {
//                 IPLHistory.map((value,index)=>
//                 <>
//                 { value.totalscore>500 &&
//                         <>
//                         <h2>{index+1} .{value.name}</h2>
//                         {
//                             value.Players.map(player=>
//                             <>
//                             <h4>{player}</h4>
//                             </>
//                             )
//                         }
//                         {
//                             value.Staff.map(staff=>
//                                 <>
//                                 <h4>{staff}</h4>
//                                 </>
//                             )
//                         }
//                         </>
               
//                     }
//                 </>
//             )
//            }
//         </React.Fragment>

// )

// }

// export default NestedLists

// const IPLMeans = ["INDIAN PERMIER LEAGUE"]
//     const IPLIMAGE = "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg"
//     const CSSImage = {
//         width: 300
//     }
//     const IPLHistory = [

//                 {
//                     name : "CSK",
//                     Players :[ "MSD","Raina"],
//                     Staff :["mike","steven"]
//                 }
//                 ,
//                 {
//                     name : "RCB",
//                     Players :[ "VK","DK"],
//                     Staff :["Hesson","Don"]
//                 }


//     ]


    // <h1>{IPLMeans}</h1>
    //     <img src={IPLIMAGE} height={150} width={CSSImage.width} alt ="imageofcap"></img>
    //     <ul>
    //         <li className="IPLlisting">{IPLTeams[0]}</li>
    //         <li className="IPLlisting">{IPLTeams[1]}</li>
    //         <li className="IPLlisting">{IPLTeams[2]}</li>
    //         <li className="IPLlisting">{IPLTeams[3]}</li>
    //     </ul>