import Card from "@/componentes/Card";

export default function Home() {
  let palabra;
  let hora = 4;
  if (5 > hora) {
    palabra = "es muy temprano";
  } else {
    palabra = "es muy tarde";
  }
  return (
    <>
      <Card />
      <Card />
    </>
  );
}
