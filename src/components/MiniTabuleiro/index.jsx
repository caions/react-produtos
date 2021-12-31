import Quadrado from "../Quadrado"
import {Container} from "./styled"

const MiniTabuleiro = () =>{
  return(
    <Container>
       <div>
     <Quadrado color="white"/>
      <Quadrado color="black"/>
     </div>
     <div>
     <Quadrado color="black"/>
      <Quadrado color="white"/>
     </div>
    </Container>
  )
}

export default MiniTabuleiro