import { ColorWheel } from '../cmps/ColorWheel'

export function HomePage() {


  return (
    <section className='home-page flex auto-center'>

      <ColorWheel type={'monochrom'} />
      <ColorWheel type={'triadic'} />
      <ColorWheel type={'complimentary'} />

    </section>
  )
}