import React from 'react';
import './App.css';
import cats from './cats.jpg'
import chubaka from './chubaka.jpg'
import dogs from './dogs.jpg'
import dyno from './dyno.jpg'
import planets from './planets.jpg'

type BlockProps = {
  img: string
}

function Header({img}: BlockProps) {
  return <header className="header" style={{backgroundImage: `url(${img})`}} />
}

function LeftPanel({img}: BlockProps) {
  return <div className="panel-left" style={{backgroundImage: `url(${img})`}} />
}

type MainBodyProps = React.PropsWithChildren & {
  img: string
}

function MainBody({children, img}: MainBodyProps) {
  return <main className="main-body" style={{backgroundImage: `url(${img})`}}>{children}</main>
}

function RightPanel({img}: BlockProps) {
  return <div className="panel-right" style={{backgroundImage: `url(${img})`}} />
}

function Footer({img}: BlockProps) {
  return <footer className="footer" style={{backgroundImage: `url(${img})`}} />
}

function getRandomColor() {
  const colors = ['#DC7633', '#F9E79F', '#BB8FCE', '#6C3483', '#95A5A6', '#2E4053', '#E74C3C']

  return colors[Math.floor(Math.random() * colors.length - 1)]
}


function App() {
  const [images, setImages] = React.useState([cats, chubaka, dogs, dyno, planets])
  const shuffleImages = () => setImages(imags => [...imags].sort(() => (Math.random() - 0.6)))
  const [btnColor, setBtnColor] = React.useState(getRandomColor())

  const onBtnClick = () => {
    shuffleImages(); 
    setBtnColor(getRandomColor());
  }

  return (
    <div className="app container">
      <Header img={images[0]} />
      <LeftPanel img={images[1]} />
      <MainBody img={images[2]}>
        <button style={{backgroundColor: btnColor}} 
          onClick={onBtnClick}
        >Shuffle</button>
      </MainBody>
      <RightPanel img={images[3]} />
      <Footer img={images[4]} />
    </div>
  );
}

export default App;
