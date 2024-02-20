import Link from "next/link";

export default function LinkButton({
  path,
  text,
}: {
  path: string;
  text: string;
}) {
  return (
    <Link href={path}>
      <div className="bg-primary text-emerald-50 font-kanit px-4 py-2 rounded-md hover:bg-primary-dark transition duration-500 ease-in-out">
        {text}
      </div>
    </Link>
  );
}
