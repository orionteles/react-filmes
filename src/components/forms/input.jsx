import React, { useEffect, useState } from 'react';
import { Form, Col, Row } from 'react-bootstrap';

const FormInput = (props) => {

    const [name, setName] = useState('')
    const [label, setLabel] = useState('')
    const [id, setId] = useState('')
    const [placeholder, setPlaceholder] = useState('')
    const [required, setRequired] = useState(false)
    const [value, setValue] = useState('')

    useEffect(()=>{
        setLabel((props.label ? props.label : ''))
        setName((props.name ? props.name : ''))
        setId((  props.id ? props.id : props.name))
        setPlaceholder((props.placeholder ? props.placeholder : ''))
        setRequired((props.required ? props.required : false))
        setValue((props.value ? props.value : ''))
    }, [])

    return (
        <Form.Group as={Row} controlId={id}>
            <Form.Label column sm={3} className="text-right">
            {label}: <span className='text-danger'>{required ? '*' : ''}</span>
            </Form.Label>
            <Col sm={9}>
                <Form.Control 
                    type="text" 
                    name={name}
                    defaultValue={value}
                    placeholder={placeholder}
                />
            </Col>
        </Form.Group>
    )
}

export default FormInput