export function SwitchRendering({ language }) {
  switch (language) {
    case "fr":
      return <h1>Bonjour</h1>;
    case "en":
      return <h1>Hello</h1>;
    case "es":
      return <h1>Hola</h1>;
    default:
      return <h1>We don't know that language</h1>;
  }
}
