
import React,{useState} from 'react';
import "./Section.css"
import { SearchIcon } from '@heroicons/react/solid';
import { useQuery } from 'react-query';
import axios from "axios";

function Section() {
    const [place,setPalce] = useState("");
    const fetchData = () =>{
      return  axios.get(`http://localhost:4000/:${place}`)
    }
    const {data,refetch} = useQuery("weather",fetchData,{enabled:false})
    console.log(data);

    return (
        <div className='section'>
           {/* Left section of the whole section */}
            <div className='leftSection'>
                <div className="leftSectionData">
                    <h1>
                    {data?.data?.current.temp_c}
                        {/* temp in c */}
                        <span className='leftSection__degree'> C</span></h1>

                    <h2>
                        {/* location   */}
                    {data?.data?.location.name}
                    </h2>
                    <div className="data__Details">


                    </div>
                    <div className="data__type">

                        <img
                            src={data?.data?.current.condition?.icon}
                            alt="" />
                        <p>Condition :  <span>
                            {/* mist */}
                            {data?.data?.current.condition?.text}
                        </span></p>
                    </div>


                </div>
            </div>


               {/* Right section of the whole section */}
            <div className='rightSection'>
                <div className="rightSection__header">
                    <div className="header__Left">
                        <input type="text" onChange={(e)=>setPalce(e.target.value)} placeholder='Enter your district/state' />
                    </div>

                    <div className="header__Right">
                        <button onClick={refetch}>
                        <SearchIcon style={{ width: "40px" }} />
                        </button>
                    </div>
                </div>




                <div className="rightSection__weatherDetails">

                    <h2>Weather Details</h2>

                    <p>Country :{data?.data?.location.country} <span></span></p>
                    <p>Region :{data?.data?.location.region} <span></span></p>
                    <p>Local Time : {data?.data?.location.localtime}<span></span></p>


                    <p>Temp in C :  {data?.data?.current.temp_c}<span></span></p>
                    <p>Condition:       {data?.data?.current.condition?.text}<span></span></p>
                   
                    <img alt="" />
                </div>

            </div>

        </div>
    )
}

export default Section;