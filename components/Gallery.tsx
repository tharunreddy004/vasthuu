import Image from 'next/image'

interface GalleryProps {
  images: { src: string; alt: string }[];
}

export default function Gallery({ images }: GalleryProps): React.JSX.Element {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, idx) => (
        <Image
          key={img.src + idx}
          src={img.src}
          alt={img.alt}
          width={300}
          height={128}
          className="rounded shadow object-cover w-full h-32"
          style={{ width: '100%', height: '8rem', objectFit: 'cover' }}
          priority={idx < 4}
        />
      ))}
    </div>
  );
}
