import {getNoteById} from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

interface NotePageProps {
    params:{
        id: string
    }
}

const Page = async ({params}: NotePageProps) => {

    // const {id} = params;
    const note = await getNoteById(params.id)

    return (

       <NoteDetailsClient initialData={note} />

    );
};
export default Page