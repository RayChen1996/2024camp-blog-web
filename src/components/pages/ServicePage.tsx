import ServiceBlock from "../../components/pages/home/ServiceItem";
import ServiceFlow from "../../components/pages/ServiceFlow";
import PriceTable from "../../components/pages/PriceTable";
import CustomSample from "../../components/pages/CustomSample";
import Faq from "../../components/pages/Faq";

export default function ServicePage() {
  return (
    <div className="  h-full bg-white">
      <ServiceBlock />
      <ServiceFlow />
      <PriceTable />
      <CustomSample />
      <Faq />
    </div>
  );
}
