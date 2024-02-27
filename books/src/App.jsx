import axios from "axios";
import {useState,useEffect} from "react";
import "./App.css";

function App(){

    const[data,fetchedData]=useState(null)

    useEffect(
        ()=>{
            const info=async()=>{
                try{
                    const result=await axios.get("https://reactnd-books-api.udacity.com/books",{ headers: { 'Authorization': 'whatever-you-want' }})
                    fetchedData(result.data)
                    console.log(result.data)
                }catch(error){
                    console.log("error:",error)
                }
            }
            info()
        },[]
    )
    return(
        <div>
        {data?(
            <div>
                {data.books.map((each,id)=>(
                    <div key={id}>
                        <h3>{each.title}</h3>
                        <div className="row">
                        <img src={each.imageLinks.smallThumbnail} alt="" />
                        <p>{each.description}</p>
                        </div>
                        <p>{each.authors}</p>
                        <hr></hr>
                    </div>
                ))}
            </div>
        ):(
            <p></p>
        )
        }
        </div>
    )
}
export default App