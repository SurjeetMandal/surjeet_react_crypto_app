import "./App.css"
import NavBar from "./components/NavBar/NavBar.Jsx"
import Hero from "./components/Hero/HeroTxt"
import Table from "./components/Table/Table.Jsx"

const f = () => {
  return (
    <div className="main">
      <NavBar />
      <Hero />
      <Table />
    </div>
  )
}

export default f
