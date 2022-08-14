import RepertoireForm from "../shared/RepertoireForm";
import { useState } from "react";

const CreateRepertoire = (props) => {
    const [repertoire, setRepertoire] = useState({
        piece: '',
        catalog: '',
        composer: '',
        level: '',
        description: '',
        published: ''
    })

    console.log('this is rep in createRep', repertoire)

    const handleChange = (e) => {
        setRepertoire(prevRepertoire => {
            const updatedValue = e.target.value
            const updatedName = e.target.name
            
            const updatedRepertoire = {
                [updatedName]: updatedValue
            }
            return {
                ...prevRepertoire,
                ...updatedRepertoire
            }
        })
    }
    return <RepertoireForm repertoire={ repertoire } handleChange={ handleChange }/>
}

export default CreateRepertoire