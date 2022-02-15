
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';

function Login() {
  return <p>Login</p>
}

function Contact() {
  return <p>Contact</p>
}

function Services () {


  return(
    <div>
      <p>These are our services</p>
      <nav>
      {/* <ServicesWeb/>
      <ServicesServer/> */}
        <NavLink to='web'>WEB</NavLink> | {" "}
        <NavLink to='server'>SERVER</NavLink>
      </nav>
    </div>
  ) 
  
}

function ServicesWeb() {
  return (
    <div>
      <p>Services - web</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius suscipit repudiandae aperiam! Inventore nulla, ex sint magnam sapiente temporibus, veniam quas, possimus nihil neque repellat deleniti? Qui quae, facere quibusdam esse quos veniam placeat mollitia, exercitationem tenetur corporis aliquid culpa ad accusamus, quidem officiis officia. Repellendus magni aspernatur id expedita. Corrupti fugiat nostrum natus. Eveniet alias sed eum suscipit enim reiciendis a commodi, placeat hic repudiandae quaerat eos perferendis dolorem ab laboriosam, maiores, aperiam mollitia ullam magnam porro fuga esse quis delectus! Ducimus iure corporis autem error voluptates impedit, commodi rem molestiae enim quam sunt velit quis. Alias, et odit?</p>
      <p id="bottom"></p>
      <a href="#">Jump to the top</a>
    </div>
  )
  
}

function ServicesServer(){
  return <p>Services-server</p>
}

console.log("App is starting :D");

function App() {
  return(
    <div className='App'>
      <h1>Hello</h1>

      <nav>
        <NavLink to="login">Login</NavLink> | {" "}
        <NavLink to='contact'> Contact </NavLink> | {" "}
        <NavLink to='services'>Services</NavLink> | {" "}
        {/* <NavLink to='services/web'>WEB</NavLink> | {" "}
        <NavLink to='services/server'>SERVER</NavLink> */}
      </nav>

      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services">
          <Route index element={<Services/>}/>
          <Route path="web" element={<ServicesWeb/>}/>
          <Route path="server" element={<ServicesServer/>}/>
          </Route>
      </Routes>
    </div>
  )
}

export default App;
