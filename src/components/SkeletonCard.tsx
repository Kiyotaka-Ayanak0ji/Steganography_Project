import "./SkeletonCard.css";

const SkeletonCard = () => {
  return (
    <div className='flex flex-col h-80 w-80 rounded-lg items-center bg-slate-400/60 dark:bg-cyan-300'>
        
      {/* Image loading Skeleton */}
      <div className='flex rounded-lg mt-4 mb-2 bg-slate-500 dark:bg-cyan-500 animate-load w-1/2 h-1/2'/>
      
      {/* Text lines loading Skeleton */}
      <div className="mt-3 mb-4 flex rounded-xl w-11/12 h-5 bg-slate-500 dark:bg-cyan-500 animate-load"/>
      <div className="mb-4 flex rounded-xl w-11/12 h-5 bg-slate-500 dark:bg-cyan-500 animate-load"/>
      <div className="flex rounded-xl w-11/12 h-5 bg-slate-500 dark:bg-cyan-500 animate-load"/>
    
    </div>       
  )
}

export default SkeletonCard;