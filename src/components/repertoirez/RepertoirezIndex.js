import { useState, useEffect } from 'react'
import { getAllRepertoirez } from '../../api/repertoirez' 
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import  messages  from '../shared/AutoDismissAlert/messages'
const cardContainerStyle = {
    // display: 'flex',
    // flexFlow: 'row wrap',
    //justifyContent: 'center',
    // textAlign: 'center',
}

const RepertoirezIndex = (props) => {
    const [repertoirez, setRepertoirez] = useState(null)
    const { msgAlert } = props
    
    useEffect(() => {
        getAllRepertoirez()
            // .then(res => console.log('res', res.data.repertoirez))
            .then(res => setRepertoirez(res.data.repertoirez))
            .catch(err => msgAlert({
                heading: 'Error Getting Pets',
                message: messages.getRepertoirezFailure,
                variant: 'danger'
            }))
        console.log('use effect works', repertoirez)
    }, [])

    if (!repertoirez) {
        return (<div style={{textAlign: "center"}}>
                 <p>loading...</p>
                </div>)
    } else if (repertoirez.length === 0) {
        return <p>No repertoire yet. Better add some.</p>
    }

    // return <h1>This is the repertoirez index component</h1>

     const repertoireCards = repertoirez.map(repertoire => {
        // console.log("hi", {repertoire.catalog})
        return <>
                <Card style={{width: '40%', margin: 5}} key={repertoire.id}>
                    <Card.Body>
                        <Link to={`/repertoirez/${repertoire.id}`}>{repertoire.piece}, {repertoire.catalog}</Link>
                    </Card.Body>
                </Card>
            </>
            //   <Card>
            //     {/* <Card.Header>Hello {repertoire.composer} </Card.Header> */}
            //         <Card.Header>{repertoire.composer}</Card.Header> 
            //     <Card.Body>
            //     <Card.Text> There is text here
            //          {/* <Link to={`/repertoirez/${repertoire.id}`}>View piece</Link> */}
            //      </Card.Text>
            // </Card.Body> 
            //  </Card>
     })

    return (
        <div style={ cardContainerStyle }>
            { repertoireCards }
        </div>
    
    )
}
export default RepertoirezIndex