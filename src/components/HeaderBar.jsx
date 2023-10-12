import SearchIcon from '@mui/icons-material/Search';
import { useRef } from "react";

function HeaderBar({onSearch,data}) {
   const cityRef=useRef()
   

   const handleChange=(e)=>{
     cityRef.current=e.target.value
   }
   const handleSubmit=(e)=>{
    e.preventDefault();
    onSearch(cityRef.current);
   }
    return (
        <div className="w-full flex justify-between p-4">
         <h3>{data.location.name}</h3>
         <div className="text-black">
            <form className="flex gap-4" onSubmit={handleSubmit}>
                <input type="search" 
                className="border rounded-md w-full text-center outline-none" 
                ref={cityRef} 
                onChange={handleChange}
                />
                <button className="text-white">
                    <SearchIcon/>
                </button>
            </form>
        </div>
         <p>21.04.2023</p>
        </div>
    );
}

export default HeaderBar;