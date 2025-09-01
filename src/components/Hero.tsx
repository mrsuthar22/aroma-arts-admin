import { Button } from "@/components/ui/button";
import heroCandle from "@/assets/hero-candle.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero flex items-center">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Illuminate Your
              <span className="block text-transparent bg-gradient-warm bg-clip-text">
                Sacred Space
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Handcrafted scented candles made with premium natural wax and essential oils. 
              Transform any moment into a luxurious experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-warm hover:opacity-90 transition-opacity text-lg px-8 py-6"
              >
                Shop Collection
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Learn Our Story
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-warm">
              <img
                src={heroCandle}
                alt="Luxury scented candle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-soft">
              <div className="text-sm text-muted-foreground">Starting at</div>
              <div className="text-2xl font-bold text-primary">$24</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;