import axios from "axios";
export const getData =async () =>{
    let response = await axios.get("http://localhost:8080/Highradius/Winter");
     let data = response.data.Winter;
     
     data.map((Winter,index) => ({...Winter,"sl_no":index}))
     return data;
}
 
 