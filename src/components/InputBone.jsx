import { useLocation } from 'react';
const InputBone = () => {
    //const {state} = useLocation();
    //const { cadet } = state;
    //console.log(cadet);
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

            <div className="columns is-gapless">
                <div className="column is-2"></div>
                <div className="field container column is-1">
                    <label>Code</label>
                    <input type="text" className="input" placeholder="Ex. M2000" />
                </div>
                <div className="field container column is-3">
                    <label>Bone Name</label>
                    <input type="text" className="input" placeholder="Ex. Improper Shave" />
                </div>
                <div className="field container column is-1">
                    <label>Demerits</label>
                    <input type="text" className="input" placeholder="Ex. 0" />
                </div>
                <div className="field container column is-1">
                    <label>PTs</label>
                    <input type="text" className="input" placeholder="Ex. 3" />
                </div>
            </div>

            <div className="field container column is-5">
                <label>Comments</label>
                <input type="text" className="input" placeholder="Ex. Showed up to Monday Morning Inspection without a prior shave" />
            </div>

            <div className="has-text-centered">
                <button className="button is-primary">Submit</button>
            </div>
        </div>
    )
}

export default InputBone