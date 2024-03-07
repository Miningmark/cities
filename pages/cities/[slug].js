import { cities } from "@/lib/data";
import { useRouter } from "next/router";

export default function CityPage() {
  const router = useRouter();

  function returnToCities() {
    router.push("/cities");
  }

  const { slug } = router.query;
  const city = cities.find((city) => city.slug === slug);

  console.log("city", city);

  if (!city) {
    console.log("router", router);

    //Wirft fehler
    router.push("/cities");

    return (
      <>
        <p>City not found</p>
        <button onClick={returnToCities}>Return to cities page</button>
      </>
    );
  }

  return (
    <>
      <h1>{city.name}</h1>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
      <p>Description: {city.description}</p>
      <button onClick={returnToCities}>Return to cities page</button>
    </>
  );
}
