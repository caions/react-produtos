import { Container } from "./styled"

const Quadrado = (prop) =>{
  
  let color = "red"

  if(prop.color === "white"){
    color = "white"
  }else if(prop.color === "black"){
    color = "black"
  }


  return(
      <Container backgroundColor={color}/>
  )
}

export default Quadrado