import { Form, Button, Container } from 'react-bootstrap'

const RepertoireForm = (props) => {
    const { repertoire, handleChange } = props
    return (
        <Container className="justify-content-center">
            <Form>
                <Form.Label htmlFor="piece">Piece</Form.Label>
                <Form.Control
                    placeholder="What is name of the piece?"
                    name="piece"
                    id="piece"
                    value={ repertoire.piece }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="catalog">Catalog</Form.Label>
                <Form.Control
                    placeholder="What the Catalog or Opus number?"
                    name="catalog"
                    id="catalog"
                    value={ repertoire.catalog }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="composer">Composer</Form.Label>
                <Form.Control
                    placeholder="Who is the Composer?"
                    name="composer"
                    id="composer"
                    value={ repertoire.composer }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="level">Level</Form.Label>
                <Form.Control
                    placeholder="What is the leve of difficultly?"
                    type="number"
                    name="level"
                    id="level"
                    value={ repertoire.level }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="date">Published</Form.Label>
                <Form.Control
                    // placeholder="How old is your pet?"
                    type="date"
                    name="date"
                    id="date"
                    value={ repertoire.published }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                    placeholder="Some info about the piece"
                    name="description"
                    id="description"
                    value={ repertoire.description }
                    onChange={ handleChange }
                />

                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default RepertoireForm