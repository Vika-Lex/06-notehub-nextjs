import {getNoteById} from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

interface PageProps {
    params:{
        id: string
    }
}

const Page = async ({params}: PageProps) => {

    const {id} = params;
    const note = await getNoteById(id)

    return (
        <>
           <NoteDetailsClient initialData={note} />
        </>
    );
};
export default Page