export function ColorPreview({ colors }: any) {

  return (
    <article className='color-list'>
      {colors.map((clr: string, i: number) =>
        <div key={i} className='color-preview' style={{ backgroundColor: clr }}></div>
      )}
    </article>
  )
}
