import prisma from "@/app/libs/prismadb"
import getCurrentUser from "./getCurrentUser"

const getConversations = async() => {
    const currentUser = await getCurrentUser()

    if(!currentUser?.id) {
        return []
    }

    try {
        const conversations = await prisma.conversation.findMany({
            where : {
                userIds : {
                    has : currentUser.id
                }
            },
            include : {
                users : true,
                messages : {
                    include : {
                        senderI : true,
                        seen : true, 
                    }
                }
            }
        })

        return conversations

    }catch (error : any){
        console.log(error)
        return []
    }
}

export default getConversations