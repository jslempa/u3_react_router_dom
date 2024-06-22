import { useNavigate } from 'react-router-dom'

const MailboxForm = (props) => {

    //console.log(props)

    let navigate = useNavigate()

    const handleSubmit = (event) => {
        props.addBox(event)
        navigate('/mailboxes')
    }

    const newBox = props.newBox

    return (
        <div>
        <h1>Add a new mailbox</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor="boxHolder">Box Holder:</label>    
        <input type="text" 
                id="boxHolder"
                onChange={props.handleChange} 
                value={props.newBox.name}
                name={'name'} 
                placeholder={'name'}/>
        <label htmlFor="boxSize">Box Size:</label>
        <select id="boxSize"
                onChange={props.handleChange}
                value={props.newBox.boxSize}>
        <option value="" disabled defaultValue>Select size</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
        </select>
        <button>Submit</button>
        </form>
        </div>
    )
}

export default MailboxForm