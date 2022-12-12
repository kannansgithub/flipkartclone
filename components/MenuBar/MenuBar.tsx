import Card from './Card/Card';

type Props = {};

const MenuBar = (props: Props) => {
  return (
    <div className="relative w-full h-36 bg-white">
      <div
        className="flex
    justify-between
    w-full
    p-4"
      >
        <Card title="Grocery" imageUrl="/img/menubar/Grocery.png" />
        <Card title="Mobiles" imageUrl="/img/menubar/Mobiles.png" />
        <Card title="Fashion" imageUrl="/img/menubar/Fashion.png" />
        <Card title="Electronics" imageUrl="/img/menubar/Electronics.png" />
        <Card title="Grocery" imageUrl="/img/menubar/Grocery.png" />
        <Card title="Home" imageUrl="/img/menubar/Home.jpg" />
        <Card title="Appliances" imageUrl="/img/menubar/Appliances.png" />
        <Card title="Travel" imageUrl="/img/menubar/Travel.png" />
        <Card title="Top Offers" imageUrl="/img/menubar/offers.png" />
        <Card title="Beauty, Toys & More" imageUrl="/img/menubar/Toys.png" />
        <Card title="Two Wheelers" imageUrl="/img/menubar/TwoWheelers.png" />
      </div>
    </div>
  );
};

export default MenuBar;
