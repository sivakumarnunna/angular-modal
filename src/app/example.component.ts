import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalExampleComponent } from './modal-example.component';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  message = '';

  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalExampleComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `${data}`;
    }
  }
}
