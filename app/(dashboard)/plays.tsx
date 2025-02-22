import { SelectPlays } from '@/lib/products'

export function Play({ play }: { play: SelectPlays }) {
  return (
    <div>
      <h3>{play.gameName}</h3>
      <p>{play.date}</p>
      <p>{play.quantity}</p>
    </div>
  );
}