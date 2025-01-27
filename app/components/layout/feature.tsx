import { Badge } from "~/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "~/components/ui/carousel";

export const Feature = () => (
    <div className="w-full pb-20 lg:pb-40">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-end items-end  gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div>
                        <Badge>UNDER DEVELOPMENT!!</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </h2>
                        <p className="text-lg  max-w-xl lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground  text-left">
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            <br/><br/>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Nec inceptos curabitur ultricies potenti; maximus at vel.
                            Euismod facilisi in vel proin etiam tempus vestibulum libero.
                            Mi quisque platea erat placerat risus venenatis curabitur.
                            Volutpat nunc conubia posuere vitae dis himenaeos ac efficitur.
                            Urna vestibulum per natoque mauris blandit arcu aenean convallis.
                            <br/><br/>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                        </p>
                    </div>
                </div>
                <div className="w-full max-w-full px-6">
                    <Carousel>
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex rounded-md aspect-video bg-muted items-center justify-center p-6">
                    <span className="text-sm">
                      Platform Screenshot {index + 1}
                    </span>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
);
