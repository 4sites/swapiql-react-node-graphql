import Link from 'next/link'

export default ({ starships }) => (
  <div className="flex flex-column p2 w5">
    {starships.map(starship => (
      <Link href={`/starship?id=${starship.id}`} key={starship.id}>
      <div className="p2 flex justify-center ba b--dashed ma1" key={starship.id}>
        <p>{starship.name}</p>
      </div>
      </Link>
    ))}
  </div>
)