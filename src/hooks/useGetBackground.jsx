import { useEffect, useState } from "react";

const useGetBackground = (id) => {

    const backgroundList = {
        '04n': "https://thumbs.dreamstime.com/z/blue-sky-clouds-wallpaper-background-skies-meteorology-natural-light-climate-theme-backgrounds-wallpapers-172487101.jpg"
    }
    const [background, setBackground] = useState('')

    // useEffect(() => {
    //     switch (id) {

    //         case '04n': return("https://thumbs.dreamstime.com/z/blue-sky-clouds-wallpaper-background-skies-meteorology-natural-light-climate-theme-backgrounds-wallpapers-172487101.jpg");
    //     }
    // }, [id])

    // return { background }

    useEffect(() => {
        setBackground(backgroundList[id])
        
    }, [id])

    return { background }
};

export default useGetBackground;