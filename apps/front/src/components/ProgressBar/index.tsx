import { useState, useEffect } from "react";
import { ProgressBarProps } from "./type";

export const ProgressBar = (props: ProgressBarProps) => {

  const [progress, setProgress] = useState<number>(100);

  const decreaseBar = () => {
    if(!props.activate) return
    if(progress > 0) {
      setTimeout(() => {
        setProgress(prevState => prevState - 1 / props.countDownTime * 100);
      }, 1000)
    }
    return progress === 0;
  }

  useEffect(() => {
    decreaseBar();
  }, [progress])


  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    border: "2px solid #ffb000"
  }

  const fillerStyles = {
    height: '100%',
    width: `${progress.toString()}%`,
    backgroundColor: "#003B77",
    borderRadius: 'inherit',
  }

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}/>
    </div>
  )
}
