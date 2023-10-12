import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

function CenterBar({data}) {
    //console.log(data.current)
    return (
        <div className="flex flex-col justify-evenly items-center m-auto gap-4">
          <div className="flex flex-col  sm:flex-row gap-4 items-center">
                <h1 className="text-9xl">{data.current.temperature}</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <AirIcon/>
                        <p>{data.current.wind_speed}</p>
                    </div>    
                    <div className='flex gap-2 items-center'>
                        <WaterDropIcon/>
                        <p>{data.current.humidity+"%"}</p>
                    </div>
                </div>
          </div>

          {/* weather description */}
          <div>
            <h2 className="text-3xl">{
                data.current.weather_descriptions[0]
            }</h2>
          </div>
        </div>
    );
}

export default CenterBar;