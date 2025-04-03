const InputBone = () => {

    return (
        <div>
            <form>
                <div className="columns">
                    <div className="field container column is-one-fifth">
                        <label>NAME</label>
                        <input type="text" className="input" placeholder="Ex. John Doe" />
                    </div>
                    <div className="field container column is-one-fifth">
                        <label>CLASS</label>
                        <input type="text" className="input" placeholder="Ex. John Doe" />
                    </div>
                    <div className="field container  column is-one-fifth">
                        <label>COMPANY</label>
                        <input type="text" className="input" placeholder="Ex. John Doe" />
                    </div>
                </div>

            </form>

            <div className="column is-1"></div>
            <div className="column is-1"></div>

            <div className="">

                <div className="dropdown is-hoverable">
                    <div className="column is-4"></div>
                    <div className="column is-4"></div>
                    <div className="column is-4"></div>


                    <div className="dropdown-trigger">
                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                            <span>Dropdown button</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                            </span>
                        </button>
                    </div>

                    <div className="dropdown-menu" id="dropdown-menu" role="menu">

                        <div className="dropdown-content">
                            <a href="#" className="dropdown-item"> Dropdown item </a>
                            <a className="dropdown-item"> Other dropdown item </a>
                            <a href="#" className="dropdown-item is-active"> Active dropdown item </a>
                            <a href="#" className="dropdown-item"> Other dropdown item </a>
                            <hr className="dropdown-divider" />
                            <a href="#" className="dropdown-item"> With a divider </a>
                        </div>
                    </div>

                </div>
            </div>
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