import {Navbar, Connection, Main, Footer, Services, Transactions } from "./components";


const App = () => {
  
  return (
    <div className="min-h-screen">
      <div>
       <Navbar />
       <Connection />
       <Main />
      </div>
      <Services />
      <Transactions />
      <Footer />
      
    </div>
  )
}

export default App
