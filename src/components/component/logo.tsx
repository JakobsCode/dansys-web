export default function Logo({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  return (
    <img
      src="/dansys.svg"
      width={width}
      height={height}
      alt="Dansys GmbH Logo"
      className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    />
  );
}
