import { useEffect, useRef, useState } from "react"
import CenterBar from "./components/CenterBar"
import FooterBar from "./components/FooterBar"
import HeaderBar from "./components/HeaderBar"
import RightBar from "./components/RightBar"
import axios from "axios"


function App() {

  const [data,setData]=useState(null)

  useEffect(()=>{
    const getData=async ()=>{
     await axios.get(`http://api.weatherstack.com/current?access_key=3de64e84fff807528a903c8c29044224&query=new york&forecast_days=6`)
    .then((res)=>{
       setData(res.data)
       console.log(res.data.location.name)
    }).catch((error)=>{
      console.error("error fetching data: ",error)
    })
    }
    getData();
  },[])

  const handleSearch = (city) => {
    console.log("i'v called")
    axios
      .get(`http://api.weatherstack.com/current?access_key=3de64e84fff807528a903c8c29044224&query=${city}&forecast_days=6`)
      .then((res) => {
        setData(res.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return(
    <div className="w-screen h-screen bg-slate-200 flex justify-center py-4 text-white font-mono">
       <div className="w-full  sm:w-10/12 bg-slate-600 flex rounded-3xl">
          <div className="flex flex-col flex-1  items-center gap-4">
            {
              data?(
              <>
                <HeaderBar onSearch={handleSearch} data={data}/>
                <CenterBar data={data}/>
                <FooterBar data={data.forecast}/>
              </>
              )
              :"loading...."
            }
          </div>
          <div className="hidden sm:flex bg-slate-500 rounded-r-3xl">
              {
                data?<RightBar data={data}/>:"loading...."
              }
          </div>
       </div>
    </div>
  )
  
}

export default App
