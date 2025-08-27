import BannerSection from "@/components/Banner";
import OfferSection from "@/components/Offers";
import ProductHighlights from "@/components/ProductHighlights";
import ReviewsSection from "@/components/Reviews";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (<div> <BannerSection />
  <WhyChooseUs />
  <ProductHighlights />
  <OfferSection />
  <ReviewsSection />
  <StatsSection />
  
  </div>

  );
}
