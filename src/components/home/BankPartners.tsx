import { useBanks } from '@/hooks/useBanks';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Landmark } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const BankPartners = () => {
  const { data: banks, isLoading } = useBanks();
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className="py-12 bg-muted/30 border-y border-border">
      <div className="container-section">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
            <Landmark className="h-4 w-4" />
            39+ Partner Banks
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Our Banking <span className="text-primary">Partners</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="flex gap-4 justify-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-20 w-32 rounded-lg" />
            ))}
          </div>
        ) : (
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {banks?.map((bank) => (
                <CarouselItem key={bank.id} className="pl-2 md:pl-4 basis-1/3 md:basis-1/5 lg:basis-1/7">
                  <Card className="border-border/50 bg-card hover:shadow-md transition-shadow">
                    <CardContent className="flex items-center justify-center p-4 h-20">
                      {bank.logo_url ? (
                        <img
                          src={bank.logo_url}
                          alt={bank.name}
                          className="max-h-12 max-w-full object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <span className="text-xs font-medium text-muted-foreground text-center">
                          {bank.name}
                        </span>
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default BankPartners;
