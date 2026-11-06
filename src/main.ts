import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { addIcons } from 'ionicons';
import {
  addCircleOutline,
  alertCircleOutline,
  calendarOutline,
  checkmarkCircleOutline,
  createOutline,
  documentTextOutline,
  heartOutline,
  mailOutline,
  peopleOutline,
  personAddOutline,
  personOutline,
  timeOutline,
  trashOutline,
} from 'ionicons/icons';

import { AppModule } from './app/app.module';

addIcons({
  'add-circle-outline': addCircleOutline,
  'alert-circle-outline': alertCircleOutline,
  'calendar-outline': calendarOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'create-outline': createOutline,
  'document-text-outline': documentTextOutline,
  'heart-outline': heartOutline,
  'mail-outline': mailOutline,
  'people-outline': peopleOutline,
  'person-add-outline': personAddOutline,
  'person-outline': personOutline,
  'time-outline': timeOutline,
  'trash-outline': trashOutline,
});

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
