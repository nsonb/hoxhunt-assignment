import { useEffect, useLayoutEffect, useState } from "react";

// custom type that extends HTMLDivElement to be used with the custom hooks and typescript
export interface refElement extends HTMLDivElement {
    current?:  {
        offsetWidth?: number
        offsetHeight?: number
    }
}
// custom hooks that provide the size the referenced jsx component
// this needs more development
export const useContainerDimensions = (myRef : refElement) => {
    const getDimensions = () => ({
      width: myRef?.current?.offsetWidth || 0,
      height: myRef?.current?.offsetHeight || 0
    })
    // this dimensions value is not the actual dimension value, but an estimation so on startup the component 
    // is correctly rendered responsively
    const [dimensions, setDimensions] = useState(window.screen.width > 600 ? { width: 800, height: 0 } : { width: 400, height: 0 })

    useLayoutEffect(() => {
      
    }, [])
  
    useLayoutEffect(() => {
      const handleResize = () => {
        setDimensions(getDimensions())
      }
      setDimensions(getDimensions())
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };