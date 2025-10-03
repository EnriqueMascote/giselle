interface BalloonProps {
  color: string;
  delay: number;
  left: string;
}

export function Balloon({ color, delay, left }: BalloonProps) {
  return (
    <div
      className="absolute balloon"
      style={{
        left,
        animationDelay: `${delay}s`,
      }}
    >
      <div className={`w-20 h-24 ${color} rounded-full relative`} style={{
        boxShadow: 'inset -10px -10px 0px rgba(0,0,0,0.3)',
      }}>
        <div className="absolute bottom-0 left-1/2 w-1 h-16 bg-gray-800 transform -translate-x-1/2"></div>
        <div className="absolute top-2 left-4 w-8 h-10 bg-white opacity-40 rounded-full" style={{
          filter: 'blur(3px)'
        }}></div>
      </div>

      <style>{`
        .balloon {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(100vh) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(75vh) translateX(-20px) rotate(-5deg);
          }
          50% {
            transform: translateY(50vh) translateX(20px) rotate(5deg);
          }
          75% {
            transform: translateY(25vh) translateX(-10px) rotate(-3deg);
          }
          100% {
            transform: translateY(-100px) translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
