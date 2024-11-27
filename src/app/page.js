async function fetchCards() {
  const response = await fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php");
  const result = await response.json();
  return result.data || [];
}

export default async function Home() {
  const cards = await fetchCards();

  return (
    <div className="grid grid-cols-10">
      {cards.slice(0, 100).map((card) => (
        <img src={card.card_images[0].image_url} alt={card.name} width={200} />
      ))}
    </div>
  );
}
