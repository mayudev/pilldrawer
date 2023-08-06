import { useNavigate } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';

const InventoryForm = () => {
  const navigate = useNavigate();

  const navigateBack = () => navigate('/inventory');

  return (
    <div>
      <div class="flex items-center mx-4">
        <Button circular onClick={navigateBack} title="Return">
          <div class="i-material-symbols-arrow-back text-2xl" />
        </Button>
        <PageTitle>Add new item</PageTitle>
      </div>

      <main>main form</main>
    </div>
  );
};

export default InventoryForm;
