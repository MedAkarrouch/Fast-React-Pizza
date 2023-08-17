import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
function UpdateOrder() {
  const fether = useFetcher();
  return (
    <fether.Form method="patch" className="text-right">
      <Button type="primary">Make priority</Button>
    </fether.Form>
  );
}
export async function action({ request, params }) {
  await updateOrder(params.orderId, { priority: true });
  return null;
}
export default UpdateOrder;
