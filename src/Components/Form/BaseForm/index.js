import React from 'react'
import {Form, Field} from 'formik'
import {FormContainer} from './styles';
const BaseForm = props => {
    
    const {
        errors,
        touched,
        endpointNames,
        isSubmitting,
    } = props
    return (
        <FormContainer>
            <Form>
                <label> Get me </label>
                <Field type='number' name='amount'/>
                <label> images of </label>
                <Field component='select' name='endpoint'>
                <option value={endpointNames.shibes}>{endpointNames.shibes}</option>
                <option value={endpointNames.cats}>{endpointNames.cats}</option>
                <option value={endpointNames.birds}>{endpointNames.birds}</option>
                <option value='random'>random</option> 
                </Field>
                <label> please! </label>
                
                <button type='submit' disabled={isSubmitting}>
                    { isSubmitting ? 'Fetching...' : 'Submit' } 
                </button>
                
                {errors.amount && touched.amount && <p>{errors.amount}</p>}
            </Form>
        </FormContainer>
    )
}

export default BaseForm