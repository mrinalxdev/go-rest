"use client"

import { Conversation } from "@prisma/client"

interface ConversationListProps {
    initialItems : Conversation[]
}

const ConversationList: React.FC<ConversationListProps> = ({ initialItems }) => {
    return (
        <div>List</div>
    )
}

export default ConversationList