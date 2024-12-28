import { X } from 'lucide-react';

export function ColorLegend() {
  return (
    <div className="mt-8 bg-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Indicadores de color</h2>
        <button className="text-gray-400 hover:text-white">
          <X size={20} />
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4 text-center text-sm">
        <div>
          <div className="bg-green-500 h-8 rounded mb-2"></div>
          <span>Correcto</span>
        </div>
        <div>
          <div className="bg-yellow-500 h-8 rounded mb-2"></div>
          <span>Parcial</span>
        </div>
        <div>
          <div className="bg-red-500 h-8 rounded mb-2"></div>
          <span>Incorrecto</span>
        </div>
        <div>
          <div className="bg-gray-600 h-8 rounded mb-2"></div>
          <span>Más alto</span>
        </div>
        <div>
          <div className="bg-gray-700 h-8 rounded mb-2"></div>
          <span>Más bajo</span>
        </div>
      </div>
    </div>
  );
}