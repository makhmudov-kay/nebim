import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslateModule } from '@ngx-translate/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';
import { finalize } from 'rxjs';
import {
  NzNotificationModule,
  NzNotificationService,
} from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-form-to-send',
  templateUrl: './form-to-send.component.html',
  styleUrls: ['./form-to-send.component.css'],
  standalone: true,
  imports: [
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NzNotificationModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormToSendComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private telegram$: TelegramService,
    private $cd: ChangeDetectorRef,
    private notification: NzNotificationService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      phone: [null, [Validators.required]],
      fullName: [null, [Validators.required]],
      message: [null, [Validators.required]],
    });
  }

  createNotification(type: string): void {
    this.notification.create(
      type,
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    const request = this.form.getRawValue();
    this.telegram$
      .sendMessage(request.fullName, request.phone, request.message)
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.form.reset();
          this.createNotification('success');
        },
        error: (err) => {
          this.createNotification('error');
        },
        complete: () => {
          this.isLoading = false;
          this.$cd.markForCheck();
        },
      });
  }
}
