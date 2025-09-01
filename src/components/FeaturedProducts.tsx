import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import vanillaCandle from "@/assets/vanilla-candle.jpg";
import lavenderCandle from "@/assets/lavender-candle.jpg";
import eucalyptusCandle from "@/assets/eucalyptus-candle.jpg";

const products = [
  {
    id: "1",
    name: "Vanilla Dreams",
    price: 32,
    image: vanillaCandle,
    description: "Warm vanilla with hints of caramel and sandalwood"
  },
  {
    id: "2", 
    name: "Lavender Fields",
    price: 28,
    image: lavenderCandle,
    description: "Pure lavender essential oil for ultimate relaxation"
  },
  {
    id: "3",
    name: "Eucalyptus Zen",
    price: 35,
    image: eucalyptusCandle,
    description: "Refreshing eucalyptus with mint and cedar notes"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Collection</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most beloved scents, carefully crafted to create the perfect ambiance for any occasion
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;