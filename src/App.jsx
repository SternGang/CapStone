// we are using the useState webhook from react to keep track of changes the user makes to input values and to dynamically load resources (notes) to display on the page
// we are using the useEffect webhook only to load our initial resource values
import { useState, useEffect } from 'react'

// these components create a 'piece' of our page; while they could have easily been incorporated into this App.jsx, they create reusable and distinct parts of the app as a whole
import Footer from './components/Footer'
import Header from './components/Header'
import Note from './components/Note'
import Notification from './components/Notification'
import { useNavigate } from "react-router"
import cadetsService from './services/cadets'

const App = () => {

  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }

  let navigate = useNavigate();
  const login = (event) => {
    setErrorMessage(null)
    event.preventDefault()
    console.log(inputs)
    console.log(cadets)
    const foundCadet = cadets.find(cadet => cadet.userEmail === inputs.email)
    if (foundCadet){
      console.log("found",foundCadet )
      if (foundCadet.Password === inputs.password) {
        console.log("password checks out",inputs.password)
        //navigate("/InputBone")
        navigate('/InputBone', { state: { cadet: foundCadet.id } } );

      } else {
        console.log("bad password")
        setErrorMessage("Password incorrect")
      }
    } else {
      console.log("could not find cadet")
      setErrorMessage("Unknown userid")
    }
    // Validate here
    // if user + pass is in data base, then let them through
    // 

   
  }
  // // this webhook sets the initial notes from the db and updates them (via the setNotes function) when a new note is added
  const [cadets, setCadets] = useState([])
  // // this webhook sets the inputs as a user updates them on the page (via the setInputs function)
  // const [inputs, setInputs] = useState({})
  // // this webhook sets an error message when an error is issued
  const [errorMessage, setErrorMessage] = useState(null)

  // // get all the resources currently stored in the db for processing; this action occurs on the page load
  useEffect(() => {
    cadetsService.getAll().then((initialCadets) => {
      setCadets(initialCadets)
    })
  }, [])

  // // set the inputs as name/value pairs as they are updated by the user
  // const handleChange = (event) => {
  //   const name = event.target.name
  //   const value = event.target.value
  //   setInputs(values => ({ ...values, [name]: value }))
  // }

  // // this function is run when the user presses save to create a new resource
  // const handleSubmit = (event) => {
  //   // must prevent default to avoid page reload
  //   event.preventDefault()

  //   // reset error message if it was previously issued
  //   setErrorMessage(null)

  //   // initialize the new object based on the provided data from inputs
  //   const noteObject = {
  //     title: inputs.title,
  //     content: inputs.content,
  //   }

  //   // make a request to the service to call the backend and save the resource created
  //   noteService.create(noteObject)
  //     .then((returnedNote) => {
  //       // if the resource was created successfully, add the value to the existing displayed array
  //       setNotes(notes.concat(returnedNote))
  //       // clear out inputs we just saved and added to the list to display
  //       setInputs('')
  //     })
  //     .catch((error) => {
  //       // if an error was thrown, display it to the user
  //       setErrorMessage('Failed to create note: ' + error.message)
  //     })
  // }
  // the code in this return is the JSX that will render the HTML based on the components and values provided from the JS code mixed in

  return (
    <div>
      <h1 className="is-size-2 has-text-centered">Login</h1>
      <div className="column is-1"></div>

      <Notification message={errorMessage}/>
      <div className="column is-1"></div>

      <form onSubmit={login}>
        <div className="field container is-max-tablet">
          <label>USERNAME</label>
          <input name="email" id="UserName" type="email" className="input" placeholder="Ex. Johnde25@vmi.edu" value={inputs.email || ''} onChange={handleChange} />
        </div>
        <div className="field container is-max-tablet">
          <label>PASSWORD</label>
          <input name="password" id="PassWord" type="password" className="input" placeholder="******" value={inputs.password || ''} onChange={handleChange} />
        </div>

        <div className="has-text-centered">
          <button id="LogInButton" className="button is-primary" type="submit">Login</button>
        </div>
      </form>

     
    </div >
  )
}

export default App