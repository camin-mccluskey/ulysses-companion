const Annotation = ({annotationId, annotationSelect, activeAnnotationId, children}) => {
  const isActive = annotationId === activeAnnotationId;
  return (
    <button 
      className={`${isActive ? "bg-green-300" : "bg-gray-200"} bg-center bg-cover hover:bg-green-300`}
      onClick={() => annotationSelect(annotationId)}>
        {children}
    </button>
  );
}

export default Annotation;
