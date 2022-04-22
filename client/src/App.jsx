import {Navbar, Connection, Main, Footer, Services, Transactions } from "./components";


const App = () => {
  
  return (
    <div className="min-h-screen">
      <div>
       <Navbar />
       <Connection />
       <Main />
      </div>
      <div className="d-none-for-m">
      <Services />
      <Transactions />
      <Footer />
      </div>
     
      
    </div>
  )
}

export default App
