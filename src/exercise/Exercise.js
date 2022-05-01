// Bonus 4c.
import Bonus from "../bonus/Bonus";
// 1a. 
// 3b. {good="Awesome", bad="Terrible"} 
// 3d. {good="Great", bad="Not Great"}
function Exercise({good="Great", bad="Not Great"}){
    // 2a. 
    return(
        <div>
            {/* 3c. */}
            {/* <h1>Great</h1> */}
            {/* <h1>Not Great</h1> */}
            <h1>{good}</h1>
            <h1>{bad}</h1>
            {/* Bonus 4c. */}
            <Bonus />
        </div>
    )
}

// 1b. 
export default Exercise;
