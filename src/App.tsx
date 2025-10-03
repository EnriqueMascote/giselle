import { useEffect, useState } from 'react';
import { Balloon } from './components/Balloon';

function App() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newConfetti = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
    }));
    setConfetti(newConfetti);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative bg-gradient-to-br from-lime-400 via-pink-600 to-yellow-300">
      {/* Globos flotantes */}
      <Balloon color="bg-red-500" delay={0} left="10%" />
      <Balloon color="bg-blue-400" delay={1} left="25%" />
      <Balloon color="bg-green-500" delay={2} left="40%" />
      <Balloon color="bg-purple-600" delay={0.5} left="55%" />
      <Balloon color="bg-orange-500" delay={1.5} left="70%" />
      <Balloon color="bg-pink-400" delay={2.5} left="85%" />
      <Balloon color="bg-cyan-500" delay={3} left="15%" />
      <Balloon color="bg-yellow-400" delay={3.5} left="60%" />

      {/* Confetti mal hecho */}
      {confetti.map((item) => (
        <div
          key={item.id}
          className="confetti"
          style={{
            left: `${item.left}%`,
            animationDelay: `${item.delay}s`,
          }}
        />
      ))}

      {/* Contenido principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {/* Título horrible */}
        <div className="text-center mb-8 rotate-3">
          <h1 className="text-8xl font-bold mb-4 animate-bounce" style={{
            fontFamily: 'Comic Sans MS, cursive',
            color: '#ff00ff',
            textShadow: '5px 5px 0px #00ff00, 10px 10px 0px #ff0000, 15px 15px 0px #0000ff'
          }}>
            ¡FELIZ
          </h1>
          <h1 className="text-9xl font-black animate-pulse" style={{
            fontFamily: 'Impact, fantasy',
            color: '#ffff00',
            textShadow: '3px 3px 0px #ff00ff, 6px 6px 0px #00ffff',
            WebkitTextStroke: '3px #000000'
          }}>
            CUMPLEAÑOS
          </h1>
        </div>

        {/* Nombre con animación ridícula */}
        <div className="my-8 animate-spin-slow">
          <h2 className="text-7xl font-bold px-8 py-4 rotate-6" style={{
            fontFamily: 'Courier New, monospace',
            background: 'linear-gradient(45deg, #ff0000, #00ff00, #0000ff, #ffff00)',
            color: '#ffffff',
            border: '10px dashed #ff00ff',
            transform: 'skew(-5deg)',
            textShadow: '2px 2px 0px #000000'
          }}>
            GISELLE
          </h2>
        </div>

        {/* Imágenes mal recortadas y mal posicionadas */}
        <div className="grid grid-cols-3 gap-4 my-8 w-full max-w-4xl">
          <div className="relative animate-wiggle">
            <img
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop"
              alt="pastel"
              className="w-full h-48 object-cover rotate-12 border-8 border-orange-500"
              style={{
                clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                filter: 'hue-rotate(90deg) saturate(3)'
              }}
            />
          </div>
          <div className="relative animate-bounce-slow">
            <img
              src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=300&h=300&fit=crop"
              alt="celebración"
              className="w-full h-48 object-cover -rotate-12 border-8 border-green-500"
              style={{
                clipPath: 'circle(40% at 30% 30%)',
                filter: 'sepia(0.8) contrast(2)'
              }}
            />
          </div>
          <div className="relative animate-wiggle-reverse">
            <img
              src="https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=300&h=300&fit=crop"
              alt="fiesta"
              className="w-full h-48 object-cover rotate-45 border-8 border-blue-500"
              style={{
                clipPath: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
                filter: 'brightness(1.5) contrast(1.5)'
              }}
            />
          </div>
        </div>

        {/* Mensaje con fuentes horribles */}
        <div className="text-center mt-8 p-6 bg-cyan-300 border-8 border-dashed border-red-600 -rotate-2 max-w-2xl">
          <p className="text-3xl mb-4" style={{
            fontFamily: 'Papyrus, fantasy',
            color: '#8b00ff',
            textShadow: '2px 2px 0px #ffff00'
          }}>
            🎉🎊🎈🎁🎂
          </p>
          <p className="text-2xl font-bold leading-relaxed" style={{
            fontFamily: 'Comic Sans MS, cursive',
            color: '#ff1493',
            textDecoration: 'underline wavy'
          }}>
            Que tengas un día SÚPER MEGA ULTRA especial lleno de alegría, amor y muchas sorpresas!!!
          </p>
          <p className="text-4xl mt-4 animate-bounce">
            🎉🥳🎊🎈🎁
          </p>
        </div>

        {/* Botón horrible */}
        <button className="mt-8 px-12 py-6 text-3xl font-black animate-pulse hover:animate-spin" style={{
          fontFamily: 'Impact, fantasy',
          background: 'linear-gradient(90deg, #ff0000, #ff7700, #ffff00, #00ff00, #0000ff, #8b00ff)',
          color: '#000000',
          border: '5px solid #ff00ff',
          borderRadius: '50% 20% / 10% 40%',
          transform: 'rotate(-3deg)',
          boxShadow: '10px 10px 0px #00ffff, 20px 20px 0px #ff00ff'
        }}>
          ¡CLICK AQUÍ! 🎉
        </button>
      </div>

      <style>{`
        @keyframes wiggle {
          0%, 100% { transform: rotate(12deg) translateX(0); }
          25% { transform: rotate(15deg) translateX(-10px); }
          50% { transform: rotate(9deg) translateX(10px); }
          75% { transform: rotate(18deg) translateX(-5px); }
        }

        @keyframes wiggle-reverse {
          0%, 100% { transform: rotate(45deg) translateY(0); }
          25% { transform: rotate(50deg) translateY(-10px); }
          50% { transform: rotate(40deg) translateY(10px); }
          75% { transform: rotate(55deg) translateY(-5px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: rotate(-12deg) translateY(0); }
          50% { transform: rotate(-12deg) translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-wiggle-reverse {
          animation: wiggle-reverse 2.5s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }

        .confetti {
          position: absolute;
          width: 10px;
          height: 20px;
          background: linear-gradient(45deg, red, yellow, blue, green);
          top: -50px;
          animation: fall 5s linear infinite;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
}

export default App;
