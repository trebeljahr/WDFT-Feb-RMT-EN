export function FlagImage({ alpha2Code, width = 30 }) {
  return (
    <img
      src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
      alt={alpha2Code + '-flag'}
      width={width}
    />
  );
}
