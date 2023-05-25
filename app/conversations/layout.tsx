import getConversations from "../actions/getConversations"
import Sidebar from "../components/sidebar/Sidebar"
import ConversationList from "./components/ConversationList"

export default async function ConversationLayout({
    children
} : {
    children : React.ReactNode
}) {
    const conversation = await getConversations()
    return (
        //@ts-expect-error 
        <Sidebar>
            <div className="h-full">
                <ConversationList 
                    initialItems = {[]}
                />
                {children}
            </div>
        </Sidebar>
    )
}