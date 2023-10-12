import AirIcon from '@mui/icons-material/Air';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import HourlyForcast from "./HourlyForcast";

function RightBar({data}) {
    return ( 
        <div className="bg-sla flex flex-col gap-4 justify-center items-center  text-center p-4">
            <div className="w-full flex flex-col items-center gap-4 justify-between">
                <h1 className="text-3xl">Good Morning</h1>
                <h3 className="text-3xl">{data.current.observation_time}</h3>
            </div>
            <div className="flex flex-col gap-4 items-center m-auto">
          <div className="flex gap-4 items-center">
                <h1 className="text-6xl">20</h1>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <AirIcon/>
                        <p>6.1 mph</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <WaterDropIcon/>
                        <p>90%</p>
                    </div>
                </div>
          </div>

          {/* weather description */}
          <div>
            <h2 className="text-3xl">Cloudy</h2>
          </div>
          
        </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl">Hourly Forcast</h1>
                <HourlyForcast/>
            </div>
        </div>
    );
}

export default RightBar;