import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookComponent } from '../book/book.component';
import { CounterComponent } from '../counter/counter.component';
import { NotificationComponent } from '../notification/notification.component';

@NgModule({
  declarations: [BookComponent, CounterComponent, NotificationComponent],
  exports: [BookComponent, CounterComponent, NotificationComponent],
  imports: [CommonModule, FormsModule],
})
export class BooksModule {}
