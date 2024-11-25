import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  email: string = '';
  password: string = '';

  constructor(private alertController: AlertController) {}

  async login() {
    if (this.email === '' || this.password === '') {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Por favor, preencha todos os campos.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Lógica de autenticação (a ser conectada com seu backend ou Firebase)
    if (this.email === 'teste@teste.com' && this.password === '123456') {
      const alert = await this.alertController.create({
        header: 'Sucesso',
        message: 'Login realizado com sucesso!',
        buttons: ['OK'],
      });
      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Erro',
        message: 'Credenciais inválidas.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  register() {
    console.log('Redirecionar para tela de registro');
    // Redirecione para a tela de registro
  }
}
