import React, { useState } from 'react'

const Decrypt: React.FC = (props) => {
    
    const [state, setState] = useState(false);

    if (props.stego) {
        //Update the state...
        setState(true);
    }

    if (state === false){
        return (
            <div className="h-auto w-full">
                
            </div>
        )
    }
    else{
        return(
            <div className="h-auto w-full">

            </div>
        )
    }
}

export default Decrypt