import { cities } from "@/lib/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CityPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [city, setCity] = useState(null);

  function returnToCities() {
    router.push("/cities");
  }

  useEffect(() => {
    if (slug) {
      const foundCity = cities.find((city) => city.slug === slug);
      if (foundCity) {
        setCity(foundCity);
      } else {
        router.push("/cities");
      }
    }
  }, [slug]);

  return (
    <>
      {city ? (
        <>
          <h1>{city.name}</h1>
          <p>Country: {city.country}</p>
          <p>Population: {city.population}</p>
          <p>Description: {city.description}</p>
          <button onClick={returnToCities}>Return to cities page</button>
        </>
      ) : (
        <>
          <p>Loading</p>
        </>
      )}
    </>
  );
}
