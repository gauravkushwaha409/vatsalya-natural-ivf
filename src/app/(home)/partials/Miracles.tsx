import Image from "next/image"

const Miracles = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-9">

      </div>
    </div>
  )
}
export default Miracles

const ImageContainer:React.FC<{src:string,alt:string}> = ({ src, alt }) => {
  return (
    <div className="relative rounded-[0.75rem] w-32 h-40 overflow-hidden">
      <Image width={128} height={160} src={src} alt={alt} className="w-full" />
    </div>
  )
}