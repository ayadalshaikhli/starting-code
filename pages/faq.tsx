import { Layout } from "@components/common";

export default function Faq() {
  const isEmpty = true;

  return (
    <div className="shipping flex flex-col text-center ">
      <div className="shipping__title p-10 text-lg font-bold">FAQ</div>
      <div className="shipping__details text-left ">
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">
            How are shipping costs calculated?
          </h1>
          <p className="p-10 w-1/2 ">
            Shipping costs are calculated based on shipping method (air, sea or
            land) and product weight / volume. Different shipping companies have
            different rates, so it’s best to check and compare which is most
            affordable and economical. For more details on how shipping costs
            are calculated, please contact us directly.
          </p>
        </div>
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">What is Buyer Protection?</h1>
          <p className="p-10 w-1/2">
            Buyer Protection is a set of guarantees that enables buyers to shop
            with confidence on our website.
          </p>
        </div>
        <div className="shipping__info flex pb-3">
          <h1 className="p-10 font-bold w-1/4">You are protected when:</h1>
          <p className="p-10 w-1/2">
            The item you ordered did not arrive within the time promised by the
            seller.
            <br /> The item you received was not as described.
            <br />
            The item you received that was assured to be genuine was fake.
          </p>
        </div>
      </div>
    </div>
  );
}

Faq.Layout = Layout;
