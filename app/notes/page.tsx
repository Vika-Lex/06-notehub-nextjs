import NotesClient from "@/app/notes/Notes.client";
import {getAllNotes} from "@/lib/api";

const Page = async () => {
    const notes = await getAllNotes('');
    return (
        <NotesClient initialData={notes}/>

    );
};
export default Page