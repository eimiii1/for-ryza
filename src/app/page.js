import Carousel from "@/components/ui/carousel";
import Letters from "@/components/ui/letters";
import Navigation from "@/components/ui/navigation";

export default function Main() {
  return (
    <>
    <Navigation />
    <div className="flex flex-col gap-30">
      <Carousel />
      <Letters />
    </div>
    </>
  )
}