import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: 'modal-example.component.html',
})
export class ModalExampleComponent {
  name: string;

  constructor(private modalCtrl: ModalController) {}
  stores: string[] = ['store1', 'store2', 'store3', 'store4'];

  confirm(store: string) {
    return this.modalCtrl.dismiss(store, 'confirm');
  }
}
