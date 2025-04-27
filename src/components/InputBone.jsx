import {  useState, useEffect } from 'react';
import cadetsService from '../services/cadets'
import bonesService from '../services/Bones'
import Events from '../services/Events';
const InputBone = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        console.log(event)
        const name = event.target.name
        const value = event.target.value
        setInputs(values => ({ ...values, [name]: value }))
        console.log(inputs)
    }

    //let navigate = useNavigate();
    const postBone = (event) => {
        setErrorMessage(null)
        event.preventDefault()
        const foundCadet = cadets.find(cadet => cadet.name === inputs.name)
        const foundBone = bones.find(Bone => Bone.BoneCode === inputs.BoneCode)
        console.log(inputs)
        if (foundCadet) {
            console.log("found", foundCadet)
        } else {
            console.log("could not find cadet")
            setErrorMessage("Unknown Cadet")
        }

        if (foundBone) {
            console.log("found", foundBone)
            console.log("BONNNNNED")
        } else {
            console.log("could not find Bone")
            setErrorMessage("Unknown bone Name")
        }
        const newObject = {
            CadetID: foundCadet.id,
            BoneCode: foundBone.BoneCode
        }
        Events.create(newObject)
    }
    const [cadets, setCadets] = useState([])
    const [bones, setBones] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)


    useEffect(() => {
        cadetsService.getAll().then((initialCadets) => {
            setCadets(initialCadets)
        })
        bonesService.getAll().then((initialBones) => {
            setBones(initialBones)
        })
    }, [])


    return (
        <div>
            <form onSubmit={postBone}>
                <div className="column is-1"></div>
                <div className="column is-1"></div>
                <div className="column is-1"></div>
                <div className="column is-1"></div>

                <div className="columns">
                    <div className="field container column is-one-fifth">
                        <label>NAME</label>
                        <input name="name" type="text" id="name" className="input" placeholder="Ex. Raj Singh" value={inputs.name || ''} onChange={handleChange} />
                        
                    </div>
                    <div className="field container column is-one-fifth">
                        <label>CLASS</label>
                        <input type="text" className="input" placeholder="Ex. 2025" />
                    </div>
                    <div className="field container  column is-one-fifth">
                        <label>COMPANY</label>
                        <input type="text" className="input" placeholder="Ex. Delta"  />
                    </div>
                </div>

                <div className="column is-1"></div>
                <div className="column is-1"></div>

                <div className="column is-4"></div>
                <div className="column is-4"></div>
                <div className="columns is-gapless">
                    <div className="column is-2"></div>
                    <div className="field container column is-1">   
                        <label>Code</label>
                        <input name="BoneCode" type="text" id="BoneCode" className="input" placeholder="Ex. M2000" value={inputs.BoneCode || ''} onChange={handleChange}/>
                    </div>
                    <div className="field container column is-3">
                        <label>Bone Name</label>
                        <input type="text" className="input" placeholder="Ex. Improper Shave" />
                    </div>
                    <div className="field container column is-1">
                        <label>Demerits</label>
                        <input type="text" className="input" placeholder="Ex. 0"  />
                    </div>
                    <div className="field container column is-1">
                        <label>PTs</label>
                        <input type="text" className="input" placeholder="Ex. 3"  />
                    </div>
                </div>

                <div className="field container column is-5">
                    <label>Comments</label>
                    <input type="text" className="input" placeholder="Ex. Showed up to Monday Morning Inspection without a prior shave" />
                </div>

                <div className="has-text-centered">
                    <button type="submit" className="button is-primary">Submit</button>
                </div>
            </form >
        </div>
    )
}

export default InputBone