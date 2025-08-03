import {getNoteById} from "@/lib/api";
import NoteDetailsClient from "@/app/notes/[id]/NoteDetails.client";

interface NotePageProps {
    params: Promise<{id: string}>;
}

const Page = async ({params}: NotePageProps) => {

    const {id} = await params;
    const note = await getNoteById(id)

    return (

       <NoteDetailsClient initialData={note} />

    );
};
export default Page