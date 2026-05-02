import Image from "next/image";

export const Logo = ({ height, width, className, alt, src }: { height: number, width: number, className: string, alt: string, src: string }) => {
  return <Image src={src} alt={alt} width={width} height={height} className={className} />;
};