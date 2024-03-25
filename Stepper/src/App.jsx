import "./App.css";
import ChackoutStrpper from "./components/Stepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details .</div>,
  },
  {
    name: "Shpping Info",
    Component: () => <div>Enter your shipping address .</div>,
  },
  {
    name: "Payment",
    Component: () => <div>complete payment for your order .</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered .</div>,
  },
];

function App() {
  return (
    <>
      <h2>ChackOut</h2>
      <ChackoutStrpper steperConfig={CHECKOUT_STEPS} />
    </>
  );
}

export default App;
