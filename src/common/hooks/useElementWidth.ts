import {RefObject, useEffect, useRef, useState} from "react";

export default function useElementWidth<T extends HTMLElement>() : [number, RefObject<T | null>] {
    const [widthPx, setWidthPx] = useState<number>(0);
    const elementRef = useRef<T | null>(null);

    useEffect(() => {
        const updateHeight = () => {
            if (elementRef.current) {
                setWidthPx(elementRef.current.clientWidth);
                setWidthPx(elementRef.current.clientWidth);
            }
        }
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => {
            window.removeEventListener('resize', updateHeight);
        }
    }, [])

    return [widthPx, elementRef]
}