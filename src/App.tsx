import Competences from "./components/competences"
import Experiences from "./components/experiences"
import Header from "./components/header"
import Navbar from "./components/navbar"
import WhoIAm from "./components/whoiam"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <WhoIAm />
      <Experiences />
      <Competences />
    </>
  )
}

export default App
