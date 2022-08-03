import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getOneRepertoire } from '../../api/repertoirez'
import messages from '../shared/AutoDismissAlert/messages'
import { Container, Card } from 'react-bootstrap'
const ShowRepertoire = (props) => {
    const [repertoire, setRepertoire] = useState(null)
    const { id } = useParams()
    const { msgAlert } = props
    const navigate = useNavigate()

    useEffect(() => {
        getOneRepertoire(id)
            .then(res => setRepertoire(res.data.repertoire))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Repertoire',
                    message: messages.getRepertoirezFailure,
                    variant: 'danger'
                })
                navigate('/')
        })
    }, [])
    if (!repertoire) {
        return (<div style={{textAlign: "center"}}>
        <p>loading...</p>
       </div>)
    }
    return (
        <Container className='fluid'>
            <Card>
                <Card.Header>{repertoire.piece} by {repertoire.composer}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <small>{repertoire.description}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default ShowRepertoire