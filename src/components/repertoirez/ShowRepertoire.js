import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneRepertoire } from '../../api/repertoirez'

const ShowRepertoire = (props) => {
    const [repertoire, setRepertoire] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getOneRepertoire(id)
        .then(res => setRepertoire(res.data.repertoire))
    }, [])
    if (!repertoire) {
        return (<div style={{textAlign: "center"}}>
        <p>loading...</p>
       </div>)
    }
    return <p>This is the show repertoire {id}</p>
}

export default ShowRepertoire