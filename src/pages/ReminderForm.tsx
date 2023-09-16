import { useLocation, useNavigate } from '@solidjs/router';
import { PageTitle } from '../components/layout/PageTitle';
import Button from '../components/forms/Button';
import { SectionHeading } from '../components/layout/SectionHeading';
import TextField from '../components/forms/TextField';
import {
  Reminder,
  ReminderFrequency,
  ReminderSchema,
} from '../models/Reminder';
import { createResource } from 'solid-js';
import { getInventory } from '../services/inventoryService';
import Select from '../components/forms/Select';
import { useForm } from '../hooks/useForm';
import { saveReminder } from '../services/reminderService';

const ReminderForm = () => {
  const navigate = useNavigate();

  const [items] = createResource(getInventory);

  const { state } = useLocation();

  const { form, fieldArgs, errors } = useForm<Reminder>({
    initialValues: {
      id: 0,
      medicationId: 0,
      frequency: ReminderFrequency.Daily,
      weekdays: 1,
      hour: 0,
      minute: 0,
    },
    schema: ReminderSchema,
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (Object.keys(errors()).length > 0) {
      console.log('err');
    } else {
      saveReminder(form).catch(e => console.error(e));
      navigate('/reminder');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="flex items-center mx-4">
        <button class="display-none" />
        <Button circular onClick={() => navigate('/reminders')} title="Return">
          <div class="i-material-symbols-arrow-back text-2xl" />
        </Button>
        <PageTitle>{state ? 'Edit reminder' : 'Add new reminder'}</PageTitle>
        <span class="flex-1" />

        <Button>Save</Button>
      </div>
      <main class="my-2 mx-4">
        <SectionHeading>Details</SectionHeading>
        <section>
          <div>a</div>

          <Select
            label="Medication"
            options={items()?.map(r => r.id) || []}
            displayOptions={items()?.map(r => r.name) || []}
            value={form.medicationId}
            {...fieldArgs('medicationId')}
          />
          <TextField
            label="Frequency"
            value={form.frequency}
            type="number"
            {...fieldArgs('frequency')}
          />
          <TextField
            value={form.weekdays}
            type="number"
            label="Weekdays"
            {...fieldArgs('weekdays')}
          />
          <TextField
            value={form.hour}
            {...fieldArgs('hour')}
            type="number"
            label="Hour"
          />
          <TextField
            value={form.minute}
            {...fieldArgs('minute')}
            type="number"
            label="Minute"
          />
        </section>
      </main>
    </form>
  );
};

export default ReminderForm;
