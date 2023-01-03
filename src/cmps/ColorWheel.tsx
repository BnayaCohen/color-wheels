import { colorService } from '../services/colorService'
import Wheel from '@uiw/react-color-wheel';
import { ColorPreview } from './ColorPreview'
import { useState } from 'react';

export function ColorWheel({ type }: any) {
  const [hex, setHex] = useState<string>('#ffffff');
  let colors
  switch (type) {
    case 'monochrom':
      colors = colorService.getMonochromaticColors(hex)
      break
      case 'triadic':
        colors = colorService.getTriadicColors(hex)
        break
      case 'complimentary':
        colors = colorService.getComplimentaryColor(hex)
        console.log(colors);
        
        break
  }

  return (
    <article className='color-scheme flex column auto-center'>
     <h3>{type.toUpperCase()}</h3>
      <Wheel
        color={hex} 
        onChange={(color) => setHex(color.hex)}
      />
      <ColorPreview colors={colors} />
    </article>
  )
}
