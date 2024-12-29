export function getColorClass(value, correctValue,field) {

  if(Array.isArray(value)) {
    if (value[0] === correctValue[0]) return 'bg-green-500';
  } 
    if (value === correctValue) return 'bg-green-500';

    if (field === 'año' || field === 'popularidad') {
      const valueNum = parseInt(value);
      const correctNum = parseInt(correctValue);
      
      if (valueNum < correctNum) {
        return 'bg-gray-600'; // More recent year
      }
      if (valueNum > correctNum) {
        return 'bg-gray-700'; // Earlier year
      }
    }
    if(field === 'artista'){
      if (value.some(val => correctValue.includes(val))) return 'bg-yellow-500';
        }
    if (value[0].includes(correctValue[0])) return 'bg-yellow-500';
    return 'bg-red-500';
  
  }