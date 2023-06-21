import React from 'react'
import styled from 'styled-components'
import CardMain from '../Components/Static/CardMain'
import GlobalButton from '../Components/Static/GlobalButton'
import img1 from '../Assets/work (1).png'
import img2 from '../Assets/work (2).png'
import img3 from '../Assets/work (3).png'
import img4 from '../Assets/work (4).png'
import img5 from '../Assets/work (5).png'
import img6 from '../Assets/work (6).png'
import img7 from '../Assets/work (7).png'

const About = () => {

  const data = [
    {
      img: img1, text: 'Peter Oti', fav: 20, view: '15k', label: 'PRO'
    },
    {
      img: img2, text: 'Ehiabhi P.', fav: 80, view: '15k', label: 'PRO'
    },
    {
      img: img3, text: 'Omamuzor S.', fav: 34, view: '15k', label: 'PRO'
    },
    {
      img: img4, text: 'Esther Ide', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Jack Ma', fav: 40, view: '11k', label: 'ELE'
    },
    {
      img: img6, text: 'Peter Oti', fav: 20, view: '15k', label: 'PRO'
    },
    {
      img: img7, text: 'Ehiabhi P.', fav: 80, view: '15k', label: 'PRO'
    },
    {
      img: img3, text: 'Omamuzor S.', fav: 34, view: '15k', label: 'PRO'
    },
    {
      img: img4, text: 'Esther Ide', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img4, text: 'Esther Ide', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Jack Ma', fav: 40, view: '11k', label: 'ELE'
    },
    {
      img: img1, text: 'Peter Oti', fav: 20, view: '15k', label: 'PRO'
    },
    {
      img: img2, text: 'Ehiabhi P.', fav: 80, view: '15k', label: 'PRO'
    },
    {
      img: img7, text: 'Omamuzor S.', fav: 34, view: '15k', label: 'PRO'
    },
    {
      img: img6, text: 'Esther Ide', fav: 30, view: '12k', label: 'PRO'
    },
    {
      img: img5, text: 'Jack Ma', fav: 40, view: '11k', label: 'ELE'
    },
  ]

  return (
    <div>
      <Container>
        <Main>
          <UpPart>
            <Left>
              <BigText> Popular books in Bookpress </BigText>
              <SmTExt> Lorem ipsum dolor sit amet, consectetur adipisicing t, consectetur adipisicing elit. Ut quos cupiditate, nemo debitis, explicabo voluptas.</SmTExt>
            </Left>
            <Right>
            <GlobalButton bcc='#0275D8' width='160px' height='40px' text='Browse All Books'/>
            </Right>
          </UpPart>
          <CardHolder>
            {data.map((el)=>{
              return(
                <CardMain bigImg={el.img} text={el.text} fav={el.fav} views={el.view} label={el.label}/>
              )

            })}
          </CardHolder>
          
          
        </Main>
      </Container>
    </div>
  )
}

const CardHolder = styled.div`
display: flex;
width: 100%;
justify-content: space-between;

/* background-color: pink; */
margin-top: 10px;
flex-wrap: wrap;
` 

const Container = styled.div`
min-height: 400px;
width: 100%;
display: flex;
padding-top: 30px;
align-items: center;
flex-direction: column;
`

const Main = styled.div`
width: 90%;
`
const Left = styled.div``
const UpPart = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
`
const Right = styled.div``
const SmTExt = styled.div`
width: 70%;
`
const BigText = styled.div`
font-size: 40px;
font-weight: 700;
margin-bottom: 15px;
`


export default About