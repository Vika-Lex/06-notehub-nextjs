'use client'

import css from './page.module.css';
import {Note} from "@/types/note";
import {formatDate} from "@/lib/date";
import {useQuery} from "@tanstack/react-query";
import * as NoteService from "@/lib/api";
import {useParams} from "next/navigation";

interface Props {
    initialData: Note,
}
const NoteDetailsClient = ({initialData}: Props) => {
const {id} = useParams() as {id: string};

    const {data, isError, isLoading} = useQuery({
        queryKey: ['noteById', id],
        queryFn: () => NoteService.getNoteById(id),
        initialData
    })

    return (
       <>
           {isLoading && <p className={css.loading}>Loading...</p>}
           {isError && <p className={css.error}>Something went wrong.</p>}
           {data && (
               <div className={css.container}>
                   <div className={css.item}>
                       <div className={css.header}>
                           <h2>{data.title}</h2>
                       </div>
                       <p className={css.content}>{data.content}</p>
                       <p className={css.date}>{formatDate(data.createdAt)}</p>

                   </div>
               </div>
           )}
       </>
    );
};
export default NoteDetailsClient