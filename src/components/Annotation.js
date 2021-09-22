const Annotation = ({
  annotationId,
  annotationSelect,
  activeAnnotationId,
  children,
  visited
}) => {
  const isActive = annotationId === activeAnnotationId;
  const color = isActive ? "bg-green-300" : visited ? "bg-purple-100" : "bg-gray-200";
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
