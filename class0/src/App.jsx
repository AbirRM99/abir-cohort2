import Footer from "./components/Footer";
import Nav from "./components/Nav";
const App = () => {
  const arr = ['Abir', 'brock', 'Camlo', 'Don','emma']
  const marks = [90,80,70,60]

  return (
    <div className="p-3 h-screen bg-black">
      {/* {marks.map(function (elem) {
        return <h1>{elem*2}</h1>
      })} */}
      {/* {marks.filter(function (elem) {
        return elem>61
      })} */}

      {/* {Nav(10,20)} */}

      {/* <Nav user = 'Abir' age = {22} />
      <Nav user = 'Harsh' age = {22} />
      <Nav user = 'Sahil' age = {22} /> */}

      {arr.map(function(elem){
        return <Nav user = {elem} />
      })}

    </div>
  )
}

export default App