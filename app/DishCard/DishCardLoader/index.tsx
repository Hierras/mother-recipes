import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const DishCardLoader = (props:any) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={700}
    viewBox="0 0 290 700"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="5" y="5" rx="5" ry="5" width="280" height="187" /> 
    <Rect x="6" y="205" rx="0" ry="0" width="203" height="94" /> 
    <Rect x="226" y="207" rx="4" ry="4" width="57" height="25" /> 
    <Rect x="6" y="310" rx="0" ry="0" width="281" height="17" /> 
    <Rect x="27" y="333" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="105" y="357" rx="0" ry="0" width="90" height="17" /> 
    <Rect x="32" y="382" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="6" y="414" rx="0" ry="0" width="90" height="17" /> 
    <Rect x="6" y="444" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="6" y="469" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="4" y="495" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="5" y="521" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="8" y="548" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="8" y="574" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="11" y="601" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="4" y="627" rx="0" ry="0" width="236" height="17" /> 
    <Rect x="7" y="654" rx="0" ry="0" width="236" height="17" />
  </ContentLoader>
)

export default DishCardLoader;