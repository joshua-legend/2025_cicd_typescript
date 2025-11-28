import Food from "@/src/Food";

export default function Home() {
  return (
    <div>
      <div>
        <h1>숲속의 작은 중국집</h1>
      </div>
      <div style={{ display: "flex", gap: "30px", flexDirection: "column" }}>
        <Food name="짜장면" url="http://localhost:3001/jjajang" />
        <Food name="탕수육" url="http://localhost:3001/tang" />
        <Food name="만듀" url="http://localhost:3001/dumpling" />
      </div>
    </div>
  );
}
