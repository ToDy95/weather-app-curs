import React from 'react'
import { ThreeCircles } from "react-loader-spinner"

const Spinner = (props) => {
  return (
    <ThreeCircles
      height={props.height}
      width={props.width}
      color='#f7a418'
      wrapperStyle={{}}
      wrapperClass=''
      visible={true}
      ariaLabel='three-circles-rotating'
      outerCircleColor=''
      innerCircleColor=''
      middleCircleColor=''
    />
  )
}

export default Spinner
