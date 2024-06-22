import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {

    console.log(props)
    
    const [mailbox, setMailbox] = useState('')

    let { id } = useParams()

    //console.log(useParams())

    useEffect(() => {

        let selectedBox = props.mailboxes.find((mailbox) => mailbox.id === parseInt(id))
        setMailbox(selectedBox)
    })

    return mailbox ? (
        <div>
            <h1>Mailbox {mailbox.id}</h1>
            <h3>{mailbox.boxHolder}</h3>
            <h3>{mailbox.boxSize}</h3>
        </div>
    ) : null
}

export default MailboxDetails