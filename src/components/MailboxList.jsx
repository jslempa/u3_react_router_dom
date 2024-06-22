import { useNavigate } from 'react-router-dom'

const MailboxList = (props) => {

    //console.log(props)
    
    let navigate = useNavigate()

    const showMailBox = (mailbox) => {
        navigate(`${mailbox.id}`)
    }
    
    return (
        <div className='mailbox-grid'>
            <h1>Mailbox List</h1>
            {
                props.mailboxes.map((mailbox) => (
                    <div className='mailbox-card'
                         onClick={() => showMailBox(mailbox)}
                         key={mailbox.id}>
                        <h3>Mailbox {mailbox.id}</h3>    
                    </div>
                ))
            }
        </div>
    )
}

export default MailboxList