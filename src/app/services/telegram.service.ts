import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TelegramService {
  private token: string = '7776806797:AAE_VGVPeql19j2twCFBM4QAFCPaaP6ddqs'; // Ваш токен от BotFather
  private chatId: string = '-4567305500'; // Ваш chat_id или id группы

  constructor(private http: HttpClient) {}

  sendMessage(name: string, phone: string, message: string): Observable<any> {
    const url = `https://api.telegram.org/bot${this.token}/sendMessage`;
    const body = {
      chat_id: this.chatId,
      text: `📩 Yangi murojaat❗️\n👤 Mijoz: ${name}\n📞 Raqam: <code>+${phone}</code>\n📄 Xabar: <code>${message}</code>`,
      parse_mode: 'HTML',
    };
    return this.http.post(url, body);
  }
}
