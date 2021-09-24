import { useSelector, useDispatch } from 'react-redux'
import { setCurrentNoteId, addNoteToVisited } from '../app/notesSlice';


const Annotation = ({
  annotationId,
  children,
}) => {
  const dispatch = useDispatch();
  const activeAnnotationId = useSelector(state => state.notes.current_note_id);
  const isActive = annotationId === activeAnnotationId;

  const visitedNotes  = useSelector(state => state.notes.visited_notes);
  const visited = visitedNotes.has(annotationId);

  const color = isActive ? "bg-green-300" : visited ? "bg-purple-100" : "bg-gray-200";

  const annotationSelect = (annotationId) => {
    dispatch(setCurrentNoteId(annotationId));
    dispatch(addNoteToVisited(annotationId));
  } 

  return (
    <button 
    // color precedence least to most - visited, active, hover
      className={`${color} hover:bg-green-300`}
      onClick={() => annotationSelect(annotationId)}>
        {children}
    </button>
  );
}

export default Annotation;

