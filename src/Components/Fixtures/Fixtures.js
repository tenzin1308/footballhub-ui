import './Fixtures.css'
import Bann from '../banner/Banner';


function Fixtures(){
    return(
        <>

         <div id="col-1">
            <Bann />
            <div className="table">
            PL table
            </div>
        </div>
        <div id="col-2">
            <Bann />
            <div className='Fix'>
                PL fixtures
            </div>
        </div>
        </>
    )
}

export default Fixtures;