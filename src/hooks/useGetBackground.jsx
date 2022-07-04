import { useEffect, useState } from "react";

const useGetBackground = (id) => {

    const [background, setBackground] = useState('')
    const backgroundList = {
        '01d': 'https://images4.alphacoders.com/752/752392.jpg',
        '01n': 'https://wallpaper.dog/large/20341333.jpg',
        '02d': 'https://wallpaperset.com/w/full/a/f/b/483801.jpg',
        '02n': 'https://images7.alphacoders.com/721/721716.jpg',
        '03d': 'https://images3.alphacoders.com/536/53625.jpg',
        '03n': 'https://images3.alphacoders.com/701/701110.jpg',
        '04d': 'https://images4.alphacoders.com/527/52718.jpg',
        '04n': 'https://images.unsplash.com/photo-1593977379931-ce8b3e44c7dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        '09d': 'https://images5.alphacoders.com/584/584402.jpg',
        '09n': 'https://images7.alphacoders.com/317/317167.jpg',
        '10d': 'https://images4.alphacoders.com/600/600599.jpg',
        '10n': 'https://images8.alphacoders.com/971/971256.jpg',
        '11d': 'https://images7.alphacoders.com/123/1237275.jpg',
        '11n': 'https://images8.alphacoders.com/723/723889.jpg',
        '13d': 'https://images2.alphacoders.com/683/68370.jpg',
        '13n': 'https://images7.alphacoders.com/735/735536.jpg',
        '50d': 'https://images4.alphacoders.com/102/1024720.jpg',
        '50n': 'https://images.alphacoders.com/101/101561.jpg',
    };
    
    useEffect(() => {
        setBackground(backgroundList[id]);
    }, [id])

    return { background }
};

export default useGetBackground;