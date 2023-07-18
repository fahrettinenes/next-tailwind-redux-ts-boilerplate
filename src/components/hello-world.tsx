import { useCounter } from "@/hooks/useCounter";

export default function HelloWorld() {
  const { increase, currentCount } = useCounter();
  return (
    <div className="grid justify-center items-center h-screen">
      <button
        onClick={increase}
        className="bg-gray-100 shadow px-4 py-2 text-lg rounded-lg"
      >
        Current count: <b>{currentCount}</b>
      </button>
    </div>
  );
}