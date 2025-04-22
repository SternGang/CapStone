import { useLocation } from 'react';
const InputBone = () => {
    //const {state} = useLocation();
    //const { cadet } = state;
    //console.log(cadet);

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
    }

    let navigate = useNavigate();
    const PostBone = (event) => {
        setErrorMessage(null)
        event.preventDefault()
        const foundCadet = cadets.find(cadet => cadet.userEmail === inputs.email)
        const foundBone = Bone.find(Bone => Bone.Name === inputs.Name)

        if (foundCadet){
            console.log("found",foundCadet )
          } else {
            console.log("could not find cadet")
            setErrorMessage("Unknown Cadet")
          }

          if (foundBone){
              console.log("BONNNNNED")
              setErrorMessage("You have been boned")
          } else {
            console.log("could not find Bone")
            setErrorMessage("Unknown bone Name")
          }

        
        //event.post(cadet.find(cadet.CadetId),bone.find(bone.BoneID))



    }
    // // this webhook sets the initial notes from the db and updates them (via the setNotes function) when a new note is added
    const [cadets, setCadets] = useState([])
    // // this webhook sets the inputs as a user updates them on the page (via the setInputs function)
    // const [inputs, setInputs] = useState({})
    // // this webhook sets an error message when an error is issued
    const [errorMessage, setErrorMessage] = useState(null)




    return (
        <div>
            <form>
                <div className="column is-1"></div>
                <div className="column is-1"></div>
                <div className="column is-1"></div>
                <div className="column is-1"></div>

                <div className="columns">
                    <div className="field container column is-one-fifth">
                        <label>NAME</label>
                        <input type="text" className="input" placeholder="Ex. Raj Singh" />
                    </div>
                    <div className="field container column is-one-fifth">
                        <label>CLASS</label>
                        <input type="text" className="input" placeholder="Ex. 2025" />
                    </div>
                    <div className="field container  column is-one-fifth">
                        <label>COMPANY</label>
                        <input type="text" className="input" placeholder="Ex. Delta" />
                    </div>
                </div>

            </form>

            <div className="column is-1"></div>
            <div className="column is-1"></div>

            <div className="column is-4"></div>
            <div className="column is-4"></div>
            <form onSubmit={PostBone}>
                <div className="columns is-gapless">
                    <div className="column is-2"></div>
                    <div className="field container column is-1">
                        <label>Code</label>
                        <input type="text" className="input" placeholder="Ex. M2000" onChange={handleChange}/>
                    </div>
                    <div className="field container column is-3">
                        <label>Bone Name</label>
                        <input type="text" className="input" placeholder="Ex. Improper Shave" onChange={handleChange}/>
                    </div>
                    <div className="field container column is-1">
                        <label>Demerits</label>
                        <input type="text" className="input" placeholder="Ex. 0" onChange={handleChange}/>
                    </div>
                    <div className="field container column is-1">
                        <label>PTs</label>
                        <input type="text" className="input" placeholder="Ex. 3" onChange={handleChange} />
                    </div>
                </div>

                <div className="field container column is-5">
                    <label>Comments</label>
                    <input type="text" className="input" placeholder="Ex. Showed up to Monday Morning Inspection without a prior shave" />
                </div>

                <div className="has-text-centered">
                    <button className="button is-primary">Submit</button>
                </div>
                </form >
        </div>
    )
}

export default InputBone