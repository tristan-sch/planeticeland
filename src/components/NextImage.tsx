import Image, { StaticImageData } from 'next/image'

type Props = {
  src: string | StaticImageData
  className?: string
  alt?: string
  width?: number
  height?: number
  fill?: boolean
  priority?: boolean
  blurDataURL?: string
}

export const NextImage = ({
  src,
  className,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  blurDataURL,
}: Props) => {
  const hasBlur = !!blurDataURL

  return (
    <Image
      className={className}
      alt={alt || ''}
      src={src}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      sizes="(max-width: 1024px) 100vw, 50vw"
      style={{ objectFit: 'cover' }}
      {...(hasBlur ? { placeholder: 'blur', blurDataURL } : { placeholder: 'empty' })}
      priority={priority}
      unoptimized={true}
      loading={!priority ? 'lazy' : undefined}
    />
  )
}
