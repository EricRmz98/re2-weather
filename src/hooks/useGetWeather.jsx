import axios from "axios";
import { useEffect, useState } from "react";

const useGetWeather = () => {
    const [weather, setWeather] = useState({})
    const apiKey = 'ee2416c0939e3c264d535dc9d247ee58';
    
    useEffect(() => {
        const success = location => {
            axios
            .get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${apiKey}`)
            .then((res) => setWeather(res.data));
        }

        navigator.geolocation.getCurrentPosition(success)
    }, [])

    console.log(weather)

    return {weather}
};



export default useGetWeather;