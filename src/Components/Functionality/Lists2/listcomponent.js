import NestedLists from "./nestedlists.js"
import IPLliststeams from "./nestedlists.js"

const ListingComp = () =>{
        const IPLTeams =["CSK","MI","RCB","KKR"]
        const IPLMeans = ["INDIAN PERMIER LEAGUE"]
        const IPLIMAGE = "https://www.hindustantimes.com/ht-img/img/2023/12/20/1600x900/Ipl-auction_1703034762917_1703034773943.jpg"
        const CSSImage = {
            width: 300
        }

    return (

        <div>
            <h1>{IPLMeans}</h1>
            <img src={IPLIMAGE} height={150} width={CSSImage.width} alt ="imageofcap"></img>
            <ul>
                <li>{IPLTeams[0]}</li>
                <li>{IPLTeams[1]}</li>
                <li>{IPLTeams[2]}</li>
                <li>{IPLTeams[3]}</li>
            </ul>
            <ul>
            <NestedLists></NestedLists> 
            </ul>
            <ul>
                <IPLliststeams></IPLliststeams>
            </ul>


        </div>
        
    )
}


export default ListingComp;