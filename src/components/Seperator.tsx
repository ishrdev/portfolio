function Separator() {
  return (
    <div className="relative w-full h-0.5 bg-gray-500/20 overflow-hidden rounded-full">
      <div className="absolute top-0 h-full w-1/4 bg-linear-to-r from-transparent via-purple-800 to-transparent animate-bounce-horizontal" />
      
      <style>{`
        @keyframes bounce-horizontal {
          0% {
            left: 0%;
            transform: translateX(-100%);
          }
          100% {
            left: 100%;
            transform: translateX(0%);
          }
        }
        .animate-bounce-horizontal {
          /* duration: 4s | timing: ease-in-out | direction: alternate (der Bounce) */
          animation: bounce-horizontal 4s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
}

export default Separator;