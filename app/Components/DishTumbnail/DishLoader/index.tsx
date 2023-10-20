import React from "react"
import ContentLoader, { Rect } from "react-content-loader/native"

const DishLoader = (props:any) => (
  <ContentLoader 
    speed={2}
    width={140}
    height={262}
    viewBox="0 0 140 262"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <Rect x="" y="0" rx="0" ry="0" width="140" height="130" /> 
    <Rect x="0" y="135" rx="0" ry="0" width="140" height="30" /> 
    <Rect x="0" y="170" rx="0" ry="0" width="140" height="20" /> 
    <Rect x="0" y="192" rx="0" ry="0" width="140" height="20" /> 
    <Rect x="30" y="227" rx="4" ry="4" width="80" height="20" />
  </ContentLoader>
)

export default DishLoader;