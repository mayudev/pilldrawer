import { A } from '@solidjs/router';
import Button from '../components/forms/Button';
import { PageTitle } from '../components/layout/PageTitle';

const Reminders = () => {
  return (
    <div>
      <div class="flex items-center justify-between mr-6">
        <PageTitle>Reminders</PageTitle>
        <A href="/reminders/add" class="cursor-default">
          <Button title="Add item" circular>
            <div class="i-material-symbols-add text-2xl" />
          </Button>
        </A>
      </div>
    </div>
  );
};

export default Reminders;
