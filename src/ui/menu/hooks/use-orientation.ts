import { useEffect, useState } from "react";


type Orientation = "landscape" | "portrait";

export const useOrientation = () => {
    const [orientation, setOrientation] = useState<Orientation>("landscape");

    useEffect(() => {
        const updateOrientation = () => {
            setOrientation(window.innerHeight > window.innerWidth ? "portrait" : "landscape");    
        }

        updateOrientation();

        window.addEventListener("resize", updateOrientation)

        return () => window.removeEventListener("resize", updateOrientation)
    }, [])

    return orientation
}