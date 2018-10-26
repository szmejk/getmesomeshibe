import { withFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import BaseForm from './BaseForm'

const requestRepeater= (url) => `https://stark-mountain-26937.herokuapp.com/repeater/?url=${url}`
const getApiUrl = (endpoint, amount ) => `http://shibe.online/api/${endpoint}?count=${amount}`

const enhance = withFormik({
    mapPropsToValues: ({amount= 1, endpoint= 'shibes'}) => ({
        amount: amount,
        endpoint: endpoint
    }),
    validationSchema: Yup.object().shape({
        amount: Yup.number().integer().min(1).max(10).required(),
    }),
    handleSubmit: (values, {setSubmitting, props: {setUrls, endpointNames}}) => {
        let {endpoint, amount} = values
        
        if(endpoint === 'random') {
            let values = Object.values(endpointNames)
            endpoint = values[Math.floor(Math.random() * values.length)]
        }
        
        axios.get(requestRepeater(getApiUrl(endpoint, amount)))
        .then( response => {
            setUrls(response.data)
            setSubmitting(false)
        })
       
    }
}) 


export default enhance(BaseForm)