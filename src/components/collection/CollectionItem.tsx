import { InventoryItem } from '../../models/InventoryItem';

type Props = {
  data: InventoryItem;
};

const CollectionItem = (props: Props) => {
  const daysLeft = () => props.data.left / props.data.daily;

  return (
    <div class="bg-secondary rounded-lg mx-1 my-1.5 p-4 flex dark-bg-dark-800">
      <div class="bg-white w-[36px] h-[36px] rounded-2xl mr-3 mt-1" />
      <div class="grow">
        <div class="text-xl font-600">{props.data.name}</div>
        <div>
          {props.data.daily}
          {props.data.unit} a day
        </div>
        <div>
          {props.data.left}
          {props.data.unit} left
        </div>
      </div>
      <div class="flex flex-col items-center">
        <div class="text-xl font-500">{daysLeft()}</div>
        <div class="text-sm">days left</div>
      </div>
    </div>
  );
};

export default CollectionItem;
