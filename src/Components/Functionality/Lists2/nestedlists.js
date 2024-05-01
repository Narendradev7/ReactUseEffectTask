    import React from "react"
    
    
    const NestedLists = () => {
    // const IPLTeams =["CSK","MI","RCB","KKR","RR"]
    const IPLHistory = [

                        {
                            name : "Chennai Super Kings",
                            image : "https://pabitraeditography.com/wp-content/uploads/2023/03/full-hd-csk-wallpaper8-min-537x1024.jpg",
                            Staff :["Mike Hussey","Steven Fleming"],
                            totalscore:1000,
                            Team :{
                                Batsmen : ["Ruturaj (C)","Rachin","Dary Michell","Shivam Dube","Rahane","Dhoni (wk)"],
                                Bowler  : ["Jadeja","Chahar","Pathernna","Rahaman","S Thakur"]
                            }
                        }
                        ,
                        {
                            name : "Royal Changellers Bangalore",
                            image :"https://w0.peakpx.com/wallpaper/1021/408/HD-wallpaper-virat-rcb-virat-kholi-thumbnail.jpg",
                            Staff :["Hesson","Don"],
                            totalscore:500,
                            Team :{
                                Batsmen : ["Virat","Faf (C)","Green","Maxwell","Anjum rawat","DK (wk)"],
                                Bowler  : ["Yash","topely","siraj","karn","ferguson"]
                            }
                        }
                        ,
                        {
                            name : "Mumbai Indians",
                            image :"https://pbs.twimg.com/media/C-fwdyLXoAACFFz.jpg",
                            Staff :["Sachin","Malinga"],
                            totalscore:600,
                            Team :{
                                Batsmen : ["Rohit","Ishan (wk)","Sky","Tilak","Tim David","Shepherd","Hardik (C)"],
                                Bowler  : ["Chawala","Jasprit","Gozeez","Akash"]
                            }
                        }
                        ,
                        {
                            name : "Kolkata Knight Riders",
                            image :"https://i.pinimg.com/originals/16/86/48/168648339bbecb1ad59de36f59c79c9e.jpg",
                            Staff :["Gautam Gambhir","Bharth Arun"],
                            totalscore:600,
                            Team :{
                                Batsmen : ["Salt (wk)","Narine","Anush","Iyer (C)","Rinku","Ramandeep","Venky Iyer"],
                                Bowler  : ["Russel","Harshit","Varun","Suyas"]
                            }
                        }
                        ,
                        {
                            name : "Sunrisers Hyderabad",
                            image :"https://upload.wikimedia.org/wikipedia/en/e/eb/Sunrisers_Hyderabad.png",
                            Staff :["Vettori","VVS"],
                            totalscore:600,
                            Team :{
                                Batsmen : ["Head","Abhiseik","Adein","H Kalseen (wk)","Samad","Shazed","Nitish Kumar Reddy"],
                                Bowler  : ["Pat Cummins (C)","Bhuvi","Natarajan","Mayank"]
                            }
                        }
                        ,
                        {
                            name : "Rajasthan Royals",
                            image :"https://upload.wikimedia.org/wikipedia/en/thumb/5/5c/This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg/1200px-This_is_the_logo_for_Rajasthan_Royals%2C_a_cricket_team_playing_in_the_Indian_Premier_League_%28IPL%29.svg.png",
                            Staff :["Sangakara","Dravid"],
                            totalscore:600,
                            Team :{
                                Batsmen : ["Butler","Jaswal","Samson (C)(wk)","Riyan","Jurel","Hetmyer","Powell"],
                                Bowler  : ["Trent Boult","Ashwin","Chahal","Sandeep Sharma"]
                            }
                        }
            ]

            const winningcount = () => {
                const totalScore = IPLHistory.reduce((acc, team) => acc + team.totalscore, 0);
                return totalScore;
            };
           
        
    
            return (
                <>
                    {IPLHistory.filter(eachTeam => eachTeam.totalscore >= 100).map((value, index) => {
                        const { name, Staff, totalscore, image, Team } = value;
                        return (
                            value.totalscore > 0 && (
                                <>
                                    <h1>{index + 1}. {name}</h1>
                                    <img src={image} height={200} width={150} alt="imageofcap" />
        
                                    <h3>Staff:</h3>
                                    <ul>
                                        {Staff.map((staff, index) => (
                                            <li key={index}>{staff}</li>
                                        ))}
                                    </ul>
        
                                    <h3>Batsmen:</h3>
                                    <ul>
                                        {Team.Batsmen.map((batsman, index) => (
                                            <li key={index}>{batsman}</li>
                                        ))}
                                    </ul>
        
                                    <h3>Bowlers:</h3>
                                    <ul>
                                        {Team.Bowler.map((bowler, index) => (
                                            <li key={index}>{bowler}</li>
                                        ))}
                                    </ul>
        
                                    <h4>Total Score is : {totalscore}</h4><br></br>
                                </>
                            )
                        );
                    })}
                    <h4>Total winning score: {winningcount()}</h4>
                </>
            );
        };
        
        export default NestedLists;

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