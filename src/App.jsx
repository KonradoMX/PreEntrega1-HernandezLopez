import CartWidget from "./components/CartWidget"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greetings={"Hola, buen día."}/>
    </>
  )

}

export default App



/*
 const name = "Mi ecommerce";
  const age = 15;
  const auth = false;
  const categories = ["Electrodomésticos", "Hogar", "Tecnología"];

  return (
    <>
      <h1>{name}</h1>
      {age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}
      {auth ? <h3>Bienvenido</h3> : <h3> Acceso denegado</h3>}
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </>
  );

  */


/*
  const sumar = () => {
    const numero = 5;

    if (numero > 5) {
      console.log("Es mayor a 5");
    } else {
      console.log("Es menor a 5");
    }
  };

  sumar();

  return(
    <>
      <div>{"Desde App".toLowerCase()}</div>
    </>
  )*/