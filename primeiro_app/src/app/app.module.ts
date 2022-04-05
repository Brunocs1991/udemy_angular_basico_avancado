import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TitleComponent } from './title/title.component';
import { CicloVidaComponent } from './ciclo-vida/ciclo-vida.component';
import { DataBidingComponent } from './data-biding/data-biding.component';
import { FormsModule } from '@angular/forms';
import { DiretivasEstruturaisComponent } from './diretivas-estruturais/diretivas-estruturais.component';
import { DireativasAtributosComponent } from './direativas-atributos/direativas-atributos.component';
import { SharedModule } from './shared/shared.module';
import { ComunicacaoComponentesComponent } from './comunicacao-componentes/comunicacao-componentes.component';
import { DiretivasComponent } from './diretivas/diretivas.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    CicloVidaComponent,
    DataBidingComponent,
    DiretivasEstruturaisComponent,
    DireativasAtributosComponent,
    ComunicacaoComponentesComponent,
    DiretivasComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
